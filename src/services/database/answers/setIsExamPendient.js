const mysql = require("../../../config/mysql");

const setIsExamPendientService = (student_id, exam_id) =>
  mysql.promise().execute(
    `UPDATE studentExam
     SET is_pendient = 0
     WHERE student_id = ?
     AND exam_id = ?`,
    [student_id, exam_id]
  );

module.exports = setIsExamPendientService;
