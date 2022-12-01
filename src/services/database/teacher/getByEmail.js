const mysql = require("../../../config/mysql");

const getTeacherByEmail = (email) =>
  mysql
    .promise()
    .execute(`SELECT * FROM teacher WHERE email = ? LIMIT 1;`, [email]);

module.exports = getTeacherByEmail;
