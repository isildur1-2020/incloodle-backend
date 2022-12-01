const mysql = require("../../../config/mysql");

const createExamService = (name, link, course_id, num_of_questions) =>
  mysql.promise().execute(
    `INSERT INTO exam (name, link, course_id, num_of_questions)
     VALUES (?, ?, ?, ?)`,
    [name, link, course_id, num_of_questions]
  );

module.exports = createExamService;
