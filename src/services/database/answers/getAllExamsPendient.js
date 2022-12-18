const mysql = require("../../../config/mysql");

const getAllExamsPendient = (course_id) =>
  mysql.promise().execute(
    `SELECT 
      studentExam.studentExam_id,
      studentExam.student_id,
      studentExam.exam_id,
      exam.name AS exam_name,
      exam.link,
      exam.max_score,
      student.name AS student_name
     FROM studentExam
     JOIN exam 
     ON studentExam.exam_id = exam.exam_id
     JOIN student 
     ON studentExam.student_id = student.student_id
     WHERE exam.course_id = ? 
     AND studentExam.score IS NULL
     AND studentExam.is_pendient = 0`,
    [course_id]
  );

module.exports = getAllExamsPendient;
