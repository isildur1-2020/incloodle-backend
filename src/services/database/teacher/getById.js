const mysql = require("../../../config/mysql");

const getTeacherByIdService = (teacher_id) =>
  mysql
    .promise()
    .execute(`SELECT * FROM teacher WHERE teacher_id = ? LIMIT 1;`, [
      teacher_id,
    ]);

module.exports = getTeacherByIdService;
