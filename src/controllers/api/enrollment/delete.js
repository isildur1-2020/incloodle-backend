const deleteEnrollmentService = require("../../../services/database/enrollment/delete");
const getAllExamsByCourseIdService = require("../../../services/database/exam/getByCourse");
const deleteEnrollToExamByCourseAndExamService = require("../../../services/database/answers/deleteEnrollToExamByCourseAndExam");

const deleteEnrollmentValidator = (req, res, next) => {
  const { course_id, student_id } = req.query;
  if (!course_id || !student_id)
    return res.status(400).json({
      err: true,
      message: "You must provide `course_id` and `student_id` fields",
    });
  if (isNaN(parseInt(course_id)) || isNaN(parseInt(student_id)))
    return res.status(400).json({
      err: true,
      message: "`course_id` and `student_id` fields must be a number",
    });
  req.course_id = course_id;
  next();
};

const deleteEnrollmentController = async (req, res) => {
  try {
    const { course_id, student_id } = req.query;
    await deleteEnrollmentService(course_id, student_id);
    const message = `Student with id = ${student_id} was removed of Course with id = ${course_id}`;
    const [examsFound] = await getAllExamsByCourseIdService(course_id);
    const removeExamsEnrollPromises = examsFound.map(({ exam_id }) =>
      deleteEnrollToExamByCourseAndExamService(student_id, exam_id)
    );
    await Promise.all(removeExamsEnrollPromises);
    console.log(
      `Student with id = ${student_id} was removed of ${examsFound?.length} exams`
    );
    console.log(message);
    return res.status(200).json({
      message,
      err: false,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = {
  deleteEnrollmentValidator,
  deleteEnrollmentController,
};
