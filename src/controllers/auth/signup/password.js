const { compareHash } = require("../../../utils/bcrypt");

const comparePassword = (req, res, next) => {
  const isPasswordValid = compareHash(
    req.body?.password,
    req.userFound?.passwd
  );
  if (!isPasswordValid)
    return res.status(200).json({
      err: true,
      message: "Incorrect credentials",
      jwt: null,
    });
  next();
};

module.exports = comparePassword;
