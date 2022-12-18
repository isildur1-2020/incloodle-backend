const mysql = require("../../../config/mysql");

const createPeriodService = (name) =>
  mysql.promise().execute(
    `INSERT INTO period (name)
     VALUES (?);`,
    [name]
  );

module.exports = createPeriodService;
