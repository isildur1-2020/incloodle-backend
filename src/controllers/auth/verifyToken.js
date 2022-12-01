const { verifyJWT } = require("../../utils/jwt");

const verifyTokenController = (req, res) => {
  try {
    const { token } = req.body;
    if (!token)
      return res.status(400).json({
        err: true,
        isAuth: false,
        message: "You must provide a token",
      });
    const isValid = verifyJWT(token);
    if (!isValid)
      return res.status(401).json({
        err: true,
        isAuth: false,
        message: "Invalid Token",
      });
    return res.status(200).json({
      err: false,
      isAuth: true,
      message: "Verification succesfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      err: true,
      isAuth: false,
      message: err.message,
    });
  }
};

module.exports = verifyTokenController;
