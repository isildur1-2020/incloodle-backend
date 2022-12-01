const mysql = require("../../../config/mysql");

const getDocumentByCourseIdService = (course_id) =>
  mysql
    .promise()
    .execute(`SELECT * FROM document WHERE course_id = ?`, [course_id]);

module.exports = getDocumentByCourseIdService;
