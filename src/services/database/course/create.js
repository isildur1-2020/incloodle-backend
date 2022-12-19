const mysql = require("../../../config/mysql");

const createCourse = (name, period, teacher_id, career) =>
  mysql.promise().execute(
    `INSERT INTO course (name, period, teacher_id, career)
     VALUES (?, ?, ?, ?);`,
    [name, period, teacher_id, career]
  );

module.exports = createCourse;
