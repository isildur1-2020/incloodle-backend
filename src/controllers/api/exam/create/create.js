const createExamService = require("../../../../services/database/exam/create");
const getStudentByCourseIdService = require("../../../../services/database/student/getByCourse");
const studentEnrollToExamService = require("../../../../services/database/answers/studentEnrollToExamService");

const createExamController = async (req, res) => {
  try {
    const link = req.wholeFileName;
    if (!link)
      return res.status(400).json({
        err: true,
        message: "You must upload a file",
      });
    const { name, course_id, num_of_questions } = req.query;
    const [examCreated] = await createExamService(
      name,
      link,
      course_id,
      num_of_questions
    );
    const { insertId: exam_id } = examCreated;
    const [studentsFound] = await getStudentByCourseIdService(course_id);
    const enrollmentToExamPromises = studentsFound.map(({ student_id }) =>
      studentEnrollToExamService(student_id, exam_id)
    );
    await Promise.all(enrollmentToExamPromises);
    console.log(
      `${studentsFound?.length} students enrrolled to course_id = ${course_id}`
    );
    const message = `Exam created succesfully!`;
    console.log(message);
    return res.status(201).json({
      link,
      message,
      err: false,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      link: null,
      err: true,
      message: err.message,
    });
  }
};

module.exports = createExamController;
