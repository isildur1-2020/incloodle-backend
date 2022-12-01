const mysql = require("../../../config/mysql");

const getCourseByStudentService = (student_id) =>
  mysql.promise().execute(
    `SELECT * FROM enrollment
     JOIN course
     ON enrollment.course_id = course.course_id
     WHERE enrollment.student_id = ?`,
    [student_id]
  );

module.exports = getCourseByStudentService;
