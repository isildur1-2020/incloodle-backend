const mysql = require("../../../config/mysql");

const deleteCareerService = (career_id) =>
  mysql
    .promise()
    .execute(`DELETE FROM career WHERE career_id = ?`, [career_id]);

module.exports = deleteCareerService;
