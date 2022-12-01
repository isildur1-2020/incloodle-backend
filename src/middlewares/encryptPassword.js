const { createHash } = require("../utils/bcrypt");

const encryptPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password)
    return res.status(200).json({
      err: true,
      message: "You must provide `password` field",
    });
  req.hashedPasswd = createHash(password);
  next();
};

module.exports = { encryptPassword };
