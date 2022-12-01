const mysql = require("../../../config/mysql");

const getExamsPendientService = (student_id, course_id) =>
  mysql.promise().execute(
    `SELECT
      studentExam.studentExam_id,
      studentExam.student_id,
      studentExam.exam_id,
      studentExam.is_pendient,
      exam.name,
      exam.link,
      exam.type,
      exam.num_of_questions,
      exam.course_id
     FROM studentExam
     JOIN exam 
     ON studentExam.exam_id = exam.exam_id
     JOIN student
     on studentExam.student_id = student.student_id
     WHERE student.student_id = ?
     AND exam.course_id = ?
     AND studentExam.is_pendient = 1`,
    [student_id, course_id]
  );

module.exports = getExamsPendientService;
