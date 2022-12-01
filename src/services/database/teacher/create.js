const mysql = require("../../../config/mysql");

const createTeacher = (email, name, rut, password) =>
  mysql.promise().execute(
    `INSERT INTO teacher (email, name, rut, passwd, rol, is_active)
     VALUES (?, ?, ?, ?, 1, 1);`,
    [email, name, rut, password]
  );

module.exports = createTeacher;
