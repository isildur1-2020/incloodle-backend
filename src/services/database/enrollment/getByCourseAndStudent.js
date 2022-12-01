const mysql = require("../../../config/mysql");

const getByCourseAndStudentService = (course_id, student_id) =>
  mysql.promise().execute(
    `SELECT * FROM enrollment
     WHERE course_id = ? AND student_id = ?`,
    [course_id, student_id]
  );

module.exports = getByCourseAndStudentService;
