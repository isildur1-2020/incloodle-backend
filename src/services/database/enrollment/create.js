const mysql = require("../../../config/mysql");

const addStudentService = (course_id, student_id) =>
  mysql.promise().execute(
    `INSERT INTO enrollment (course_id, student_id)
     VALUES (?, ?)`,
    [course_id, student_id]
  );

module.exports = addStudentService;
