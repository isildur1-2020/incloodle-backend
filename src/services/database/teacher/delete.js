const mysql = require("../../../config/mysql");

const deleteTeacher = (teacher_id) =>
  mysql
    .promise()
    .execute(`DELETE FROM teacher WHERE teacher_id = ?`, [teacher_id]);

module.exports = deleteTeacher;
