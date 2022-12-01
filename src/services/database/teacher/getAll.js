const mysql = require("../../../config/mysql");

const getAllTeacher = () =>
  mysql
    .promise()
    .execute(`SELECT teacher_id, email, name, rut, rol FROM teacher`);

module.exports = getAllTeacher;
