const mysql = require("../../../config/mysql");

const deleteCourseService = (course_id) =>
  mysql
    .promise()
    .execute(`DELETE FROM course WHERE course_id = ?`, [course_id]);

module.exports = deleteCourseService;
