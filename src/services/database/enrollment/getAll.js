const mysql = require("../../../config/mysql");

const getAllEnrollmentService = () =>
  mysql.promise().execute(`SELECT * FROM enrollment`);

module.exports = getAllEnrollmentService;
