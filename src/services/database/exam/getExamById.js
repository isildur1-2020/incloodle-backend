const mysql = require("../../../config/mysql");

const getExamByIdService = (exam_id) =>
  mysql.promise().execute(`SELECT * FROM exam WHERE exam_id = ?`, [exam_id]);

module.exports = getExamByIdService;
