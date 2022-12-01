const mysql = require("../../../config/mysql");

const studentEnrollToExamService = (student_id, exam_id) =>
  mysql.promise().execute(
    `INSERT INTO studentExam (student_id, exam_id)
     VALUES (?, ?)`,
    [student_id, exam_id]
  );

module.exports = studentEnrollToExamService;
