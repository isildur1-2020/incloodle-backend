const mysql = require("../../../config/mysql");

const getAllStudent = () =>
  mysql
    .promise()
    .execute(`SELECT student_id, email, name, rut, rol FROM student`);

module.exports = getAllStudent;
