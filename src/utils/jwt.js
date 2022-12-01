const jwt = require("jsonwebtoken");

const createJWT = (payload, remember) =>
  jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: remember ? "15 days" : "2 days",
  });

const verifyJWT = (token) => jwt.verify(token, process.env.JWT_SECRET);

const jwtToString = (token) => {
  const [, payload] = token.split(".");
  return JSON.parse(Buffer.from(payload, "base64").toString());
};

module.exports = {
  createJWT,
  verifyJWT,
  jwtToString,
};
