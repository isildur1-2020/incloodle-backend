const mysql = require("../../../config/mysql");

const deleteAdmin = (admin_id) =>
  mysql.promise().execute(`DELETE FROM admin WHERE admin_id = ?`, [admin_id]);

module.exports = deleteAdmin;
