const { verifyJWT, jwtToString } = require("../utils/jwt");

const isTeacherOrAdmin = (req, res, next) => {
  try {
    const jwt_token = req.headers["authorization"];
    if (jwt_token === undefined)
      return res.status(400).json({
        err: true,
        message: "You must provide a token",
      });
    const [, token] = jwt_token.split(" ");
    const isTokenValid = verifyJWT(token);
    if (!isTokenValid)
      return res.status(200).json({
        err: true,
        message: "Token error",
      });
    const payload = jwtToString(token);
    if (payload?.rol !== 0 && payload?.rol !== 1)
      return res.status(403).json({
        err: true,
        message: "You are not a teacher or an admin, sorry",
      });
    req.userPayload = payload;
    next();
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = { isTeacherOrAdmin };
