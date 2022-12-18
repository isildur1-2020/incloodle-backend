const mysql = require("../../../config/mysql");

const getAllCareerController = () =>
  mysql.promise().execute(`SELECT * FROM career;`);

module.exports = getAllCareerController;
