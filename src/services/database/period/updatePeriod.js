const mysql = require("../../../config/mysql");

const updatePeriodService = (name, period_id) =>
  mysql.promise().execute(
    `UPDATE period
     SET name = ?
     WHERE period_id = ?`,
    [name, period_id]
  );

module.exports = updatePeriodService;
