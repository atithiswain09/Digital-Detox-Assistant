const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: "Too many login attempts, try again later",
});

const signupLimiter = rateLimit({
  windowMs: 60 * 1000, // 1min
  max: 3, 
  message: "Too many signup attempts, try again later",
});

module.exports = { loginLimiter, signupLimiter };
