const mysql = require("../../../config/mysql");

const setAnswersTimeService = (init_date, finish_date, studentExam_id) =>
  mysql.promise().execute(
    `UPDATE studentExam
     SET init_date = ?, finish_date = ?
     WHERE studentExam_id = ?`,
    [init_date, finish_date, studentExam_id]
  );

module.exports = setAnswersTimeService;
