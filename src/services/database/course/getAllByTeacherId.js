const mysql = require("../../../config/mysql");

const getAllCourseByTeacherIdService = (teacher_id) =>
  mysql
    .promise()
    .execute(`SELECT * FROM course WHERE teacher_id = ?;`, [teacher_id]);

module.exports = getAllCourseByTeacherIdService;
