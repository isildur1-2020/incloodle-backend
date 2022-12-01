const mysql = require("../../../config/mysql");

const getAllEnrollmentExam = () =>
  mysql.promise().execute(`
    SELECT * FROM studentExam;
`);

module.exports = getAllEnrollmentExam;
