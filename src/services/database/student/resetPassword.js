const mysql = require("../../../config/mysql");

const resetPasswordService = (password, student_id) =>
  mysql.promise().execute(
    `UPDATE student
     SET passwd = ?
     WHERE student_id = ?`,
    [password, student_id]
  );

module.exports = resetPasswordService;
