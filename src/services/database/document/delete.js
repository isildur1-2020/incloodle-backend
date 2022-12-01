const mysql = require("../../../config/mysql");

const deleteDocumentService = (document_id) =>
  mysql
    .promise()
    .execute(`DELETE FROM document WHERE document_id = ?`, [document_id]);

module.exports = deleteDocumentService;
