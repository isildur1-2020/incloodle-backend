const mysql = require("../../../config/mysql");

const createAnswerService = (question_id, answer_text, studentExam_id) =>
  mysql.promise().execute(
    `INSERT INTO answer (question_id, answer_text, studentExam_id)
     VALUES (?, ?, ?)`,
    [question_id, answer_text, studentExam_id]
  );

module.exports = createAnswerService;
