const mysql = require("../../../config/mysql");

const updateStudentWithPasswordService = (student_id, name, rut, password) =>
  mysql.promise().execute(
    `UPDATE student
     SET name = ?, rut = ?, passwd = ?
     WHERE student_id = ?`,
    [name, rut, password, student_id]
  );

const updateStudentWithoutPasswordService = (student_id, name, rut) =>
  mysql.promise().execute(
    `UPDATE student
     SET name = ?, rut = ?
     WHERE student_id = ?`,
    [name, rut, student_id]
  );

module.exports = {
  updateStudentWithPasswordService,
  updateStudentWithoutPasswordService,
};
