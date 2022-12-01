const { createJWT } = require("../../../utils/jwt");

const authentication = (req, res) => {
  delete req.userFound.passwd;
  const jwt = createJWT(req.userFound, req.body?.remember);
  return res.status(200).json({
    jwt,
    err: false,
    message: "Authentication successfully",
  });
};

module.exports = authentication;
