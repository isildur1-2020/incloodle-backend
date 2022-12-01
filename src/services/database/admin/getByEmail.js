const mysql = require("../../../config/mysql");

const getAdminByEmail = (email) =>
  mysql
    .promise()
    .execute(
      `SELECT admin_id, email, name, rol, passwd FROM admin WHERE email = ? LIMIT 1;`,
      [email]
    );

module.exports = getAdminByEmail;
