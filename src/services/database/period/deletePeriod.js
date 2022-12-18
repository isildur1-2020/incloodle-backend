const mysql = require("../../../config/mysql");

const deletePeriodService = (period_id) =>
  mysql
    .promise()
    .execute(`DELETE FROM period WHERE period_id = ?`, [period_id]);

module.exports = deletePeriodService;
