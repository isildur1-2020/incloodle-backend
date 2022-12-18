const mysql = require("../../../config/mysql");

const getAllPeriodService = () =>
  mysql.promise().execute(`SELECT * FROM period;`);

module.exports = getAllPeriodService;
