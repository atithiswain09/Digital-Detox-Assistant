const rateLimit = require("express-rate-limit");

// Limit login requests
// User can try login only 5 times in 10 minutes
const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5, // Maximum 5 requests allowed
  message: "Too many login attempts, try again later",
});

// Limit signup requests
// User can create account only 3 times in 1 minute
const signupLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 3, // Maximum 3 requests allowed
  message: "Too many signup attempts, try again later",
});

// Export middleware so it can be used in routes
module.exports = {
  loginLimiter,
  signupLimiter,
};