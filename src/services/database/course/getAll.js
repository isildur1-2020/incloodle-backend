const mysql = require("../../../config/mysql");

const getAllCourseService = () =>
  mysql.promise().execute(`SELECT * FROM course;`);

module.exports = getAllCourseService;
