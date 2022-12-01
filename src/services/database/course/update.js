const mysql = require("../../../config/mysql");

const updateCourseService = (name, period, course_id) =>
  mysql.promise().execute(
    `UPDATE course
     SET name = ?, period = ?
     WHERE course_id = ?`,
    [name, period, course_id]
  );

module.exports = updateCourseService;
