const mysql = require("../../../config/mysql");

const getAllExamService = () => mysql.promise().execute("SELECT * FROM exam;");

module.exports = getAllExamService;
