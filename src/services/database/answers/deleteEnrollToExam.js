const mysql = require("../../../config/mysql");

const deleteEnrollToExamService = (studentExam_id) =>
  mysql.promise().execute(
    `DELETE FROM studentExam 
     WHERE studentExam_id = ?`,
    [studentExam_id]
  );

module.exports = deleteEnrollToExamService;
