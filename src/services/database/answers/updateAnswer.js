const mysql = require("../../../config/mysql");

const rateAnswersService = (is_correct, answer_id) =>
  mysql.promise().execute(
    `UPDATE answer
     SET is_correct = ?
     WHERE answer_id = ?`,
    [is_correct, answer_id]
  );

module.exports = rateAnswersService;
