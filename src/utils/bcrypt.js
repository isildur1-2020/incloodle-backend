const bcrypt = require("bcryptjs");

const createHash = (password) => {
  const salt = bcrypt.genSaltSync(5);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const compareHash = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = { createHash, compareHash };
