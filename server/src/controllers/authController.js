const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(password);
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Required",
      });
    }

    const existingUser = await user.findOne({ email });
    console.log(existingUser);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await user.create({
      username,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );
    console.log(token)

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: e.message, 
    });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
     console.log("Request hit from:", req.ip);
    // 1. Check input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // 2. Find user
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    // 3. Check password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // 4. Create Access Token (short time)
    const accessToken = jwt.sign(
      { userId: existingUser._id, email: existingUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    // 5. Create Refresh Token (long time)
    const refreshToken = jwt.sign(
      { userId: existingUser._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    // 6. Store refresh token in cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: false, 
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // 7. Send access token
    return res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
      user: {
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
      },
    });

  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const logout = (req, res) => {
  try {
    res.clearCookie("token");

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: e.message,
    });
  }
};

module.exports = { signUp, login, logout };
