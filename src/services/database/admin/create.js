const mysql = require("../../../config/mysql");

const createAdmin = (email, name, password) =>
  mysql.promise().execute(
    `INSERT INTO admin (email, name, passwd, rol, is_active)
     VALUES (?, ?, ?, 0, 1);`,
    [email, name, password]
  );

module.exports = createAdmin;
