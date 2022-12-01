const mysql = require("../../../config/mysql");

const deleteStudent = (student_id) =>
  mysql
    .promise()
    .execute(`DELETE FROM student WHERE student_id = ?`, [student_id]);

module.exports = deleteStudent;
