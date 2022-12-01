const mysql = require("../../../config/mysql");

const createDocumentService = (name, link, course_id) =>
  mysql.promise().execute(
    `INSERT INTO document (name, link, course_id)
     VALUES (?, ?, ?)`,
    [name, link, course_id]
  );

module.exports = createDocumentService;
