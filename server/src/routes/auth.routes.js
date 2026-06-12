const express = require("express");
const router = express.Router();
const { loginLimiter, signupLimiter } = require("../middleware/rateLimiter");
const { signupValidation, loginValidation } = require("../middleware/validator");
const { signUp, login, logout } = require("../controllers/authController");

router.post("/signup", signupLimiter, signupValidation, signUp);
router.post("/login", loginLimiter, loginValidation, login);
router.post("/logout", logout);
module.exports = router;
