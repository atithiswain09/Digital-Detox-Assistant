const jwt = require("jsonwebtoken");
const User = require("../models/user");

const verifyJWT = async (req, res, next) => {
  try {
    let token = req.cookies?.accessToken;

    // If token is not found in cookies,
    // check the Authorization header
    if (!token) {
      const authHeader = req.headers.authorization;

      if (authHeader?.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
      }
    }

    // No token found anywhere
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access Denied: No token provided",
      });
    }

    // Verify JWT token
    const decodedToken = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    // Find user in database
    const foundUser = await User.findById(decodedToken.userId).select(
      "-password -refreshToken"
    );// Accept Refresh token and  Password we Extract  Everything ./.select()method is an Method which is basically use to retriving Excptional_Data

    // User does not exist
    if (!foundUser) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    // Attach user to request object
    req.user = foundUser;

    // Move to next middleware/controller
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = { verifyJWT };