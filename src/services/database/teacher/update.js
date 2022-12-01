const mysql = require("../../../config/mysql");

const updateTeacherWithPassword = (teacher_id, name, rut, password) =>
  mysql.promise().execute(
    `UPDATE teacher
     SET name = ?, rut = ?, passwd = ?
     WHERE teacher_id = ?`,
    [name, rut, password, teacher_id]
  );

const updateTeacherWithoutPassword = (teacher_id, name, rut) =>
  mysql.promise().execute(
    `UPDATE teacher
     SET name = ?, rut = ?
     WHERE teacher_id = ?`,
    [name, rut, teacher_id]
  );

module.exports = { updateTeacherWithoutPassword, updateTeacherWithPassword };
