const mysql = require("../../../config/mysql");

const deleteEnrollmentService = (course_id, student_id) =>
  mysql.promise().execute(
    `DELETE FROM enrollment
     WHERE course_id = ? AND student_id = ?`,
    [course_id, student_id]
  );

module.exports = deleteEnrollmentService;
