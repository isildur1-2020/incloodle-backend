const mysql = require("../../../config/mysql");

const deleteExamService = (exam_id) =>
  mysql.promise().execute(`DELETE FROM exam WHERE exam_id = ?`, [exam_id]);

module.exports = deleteExamService;
