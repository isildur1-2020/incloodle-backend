const mysql = require("../../../config/mysql");

const updateCareerService = (name, career_id) =>
  mysql.promise().execute(
    `UPDATE career
     SET name = ?
     WHERE career_id = ?`,
    [name, career_id]
  );

module.exports = updateCareerService;
