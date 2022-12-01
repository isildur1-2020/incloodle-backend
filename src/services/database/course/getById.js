const mysql = require("../../../config/mysql");

const getAllCourseByIdService = (course_id) =>
  mysql
    .promise()
    .execute(`SELECT * FROM course WHERE course_id = ?;`, [course_id]);

module.exports = getAllCourseByIdService;
