const mysql = require("../../../config/mysql");

const getAllAdmin = () =>
  mysql.promise().execute(`SELECT admin_id, email, name, rol FROM admin`);

module.exports = getAllAdmin;
