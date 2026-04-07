const express = require("express");
const router = express.Router();
const { loginLimiter, signupLimiter } = require("../middleware/rateLimiter");
const { signUp, login, logout } = require("../controllers/authController");

router.post("/Signup", signupLimiter, signUp);
router.post("/login", loginLimiter, login);
router.post("/logout", logout);
module.exports = router;
