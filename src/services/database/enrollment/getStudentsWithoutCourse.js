const mysql = require("../../../config/mysql");

const getStudentsWithoutCourseService = (course_id) =>
  mysql.promise().execute(
    `SELECT 
      enrollment.enrollment_id,
      enrollment.course_id,
      enrollment.student_id,
      student.email,
      student.name,
      student.rut,
      student.rol
     FROM enrollment
     JOIN student ON enrollment.student_id = student.student_id
     WHERE enrollment.course_id = ?`,
    [course_id]
  );

module.exports = getStudentsWithoutCourseService;
