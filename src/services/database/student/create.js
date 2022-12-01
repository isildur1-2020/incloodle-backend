const mysql = require("../../../config/mysql");

const createStudent = (email, name, rut, password) =>
  mysql.promise().execute(
    `INSERT INTO student (email, name, rut, passwd, rol)
     VALUES (?, ?, ?, ?, 2);`,
    [email, name, rut, password]
  );

module.exports = createStudent;
