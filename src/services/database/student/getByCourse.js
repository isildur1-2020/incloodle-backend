const mysql = require("../../../config/mysql");

const getStudentByCourseIdService = (course_id) =>
  mysql.promise().execute(
    `SELECT student_id FROM enrollment
     WHERE enrollment.course_id = ?`,
    [course_id]
  );

module.exports = getStudentByCourseIdService;
