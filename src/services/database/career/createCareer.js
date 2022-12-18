const mysql = require("../../../config/mysql");

const createCareerService = (name) =>
  mysql.promise().execute(
    `INSERT INTO career (name)
     VALUES (?);`,
    [name]
  );

module.exports = createCareerService;
