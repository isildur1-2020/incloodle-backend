const mysql = require("../../../config/mysql");

const getByTeacherAndCourseService = (course_id, teacher_id) =>
  mysql.promise().execute(
    `SELECT * FROM course
     WHERE course_id = ? AND teacher_id = ?`,
    [course_id, teacher_id]
  );

module.exports = getByTeacherAndCourseService;
