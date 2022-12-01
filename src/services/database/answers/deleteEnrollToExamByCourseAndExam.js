const mysql = require("../../../config/mysql");

const deleteEnrollToExamByCourseAndExamService = (student_id, exam_id) =>
  mysql.promise().execute(
    `DELETE FROM studentExam 
     WHERE student_id = ? AND exam_id = ?`,
    [student_id, exam_id]
  );

module.exports = deleteEnrollToExamByCourseAndExamService;
