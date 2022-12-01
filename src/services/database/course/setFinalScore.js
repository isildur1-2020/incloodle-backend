const mysql = require("../../../config/mysql");

const setFinalScoreService = (course_id, student_id, final_score) =>
  mysql.promise().execute(
    `UPDATE enrollment
     SET final_score = ?
     WHERE course_id = ?
     AND student_id = ?`,
    [final_score, course_id, student_id]
  );

module.exports = setFinalScoreService;
