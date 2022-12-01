const mysql = require("../../../config/mysql");

const getExamByCourseIdService = (course_id) =>
  mysql
    .promise()
    .execute(`SELECT * FROM exam WHERE course_id = ?`, [course_id]);

module.exports = getExamByCourseIdService;
