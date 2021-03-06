const statusCodes = require("http-status-codes");
const dotenv = require("dotenv");
dotenv.config();

const { PORT = 3000, JWT_KEY, NODE_ENV } = process.env;

module.exports = {
  statusCodes,
  errorMessages: {
    NOT_FOUND: "Can't find data matching specified customer or season",
    UNAUTHORIZED: "Invalid credentials provided",
    ACCESS_DENIAL: "You don't have permission to access this service",
    SERVER_ERROR: " There was an internal server error",
  },
  PORT,
  JWT_KEY,
  NODE_ENV,
};
