const mysql = require("../../../config/mysql");

const rateAnswersService = (is_correct, comment, score, answer_id) =>
  mysql.promise().execute(
    `UPDATE answer
     SET is_correct = ?, comment = ?, score = ?
     WHERE answer_id = ?`,
    [is_correct, comment, score, answer_id]
  );

module.exports = rateAnswersService;
