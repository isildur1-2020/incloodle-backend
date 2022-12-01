const mysql = require("../../../config/mysql");

const resetPasswordService = (password, teacher_id) =>
  mysql.promise().execute(
    `UPDATE teacher
     SET passwd = ?
     WHERE teacher_id = ?`,
    [password, teacher_id]
  );

module.exports = resetPasswordService;
