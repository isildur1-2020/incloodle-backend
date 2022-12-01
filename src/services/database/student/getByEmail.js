const mysql = require("../../../config/mysql");

const getStudentByEmail = (email) =>
  mysql
    .promise()
    .execute(`SELECT * FROM student WHERE email = ? LIMIT 1;`, [email]);

module.exports = getStudentByEmail;
