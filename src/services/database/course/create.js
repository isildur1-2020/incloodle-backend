const mysql = require("../../../config/mysql");

const createCourse = (name, period, teacher_id) =>
  mysql.promise().execute(
    `INSERT INTO course (name, period, teacher_id)
     VALUES (?, ?, ?);`,
    [name, period, teacher_id]
  );

module.exports = createCourse;
