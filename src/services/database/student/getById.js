const mysql = require("../../../config/mysql");

const getStudentByIdService = (student_id) =>
  mysql
    .promise()
    .execute(`SELECT * FROM student WHERE student_id = ? LIMIT 1;`, [
      student_id,
    ]);

module.exports = getStudentByIdService;
