const mysql = require("../../../config/mysql");

const getAllDocumentService = () =>
  mysql.promise().execute("SELECT * FROM document;");

module.exports = getAllDocumentService;
