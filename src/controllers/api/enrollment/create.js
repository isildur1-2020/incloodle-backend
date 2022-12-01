const addStudentService = require("../../../services/database/enrollment/create");
const verifyEnrollmentService = require("../../../services/database/enrollment/getByCourseAndStudent");
const getExamsByCourseIdService = require("../../../services/database/exam/getByCourse");
const studentEnrollToExamService = require("../../../services/database/answers/studentEnrollToExamService");

const createEnrollmentValidator = (req, res, next) => {
  const { course_id, student_id } = req.body;
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

const createEnrollmentController = async (req, res) => {
  try {
    const { course_id, student_id } = req.body;
    const [enrollmentsFound] = await verifyEnrollmentService(
      course_id,
      student_id
    );
    if (enrollmentsFound.length > 0)
      return res.status(400).json({
        err: true,
        message: `Student with id=${student_id} is already enrolled to Course with id=${course_id}`,
      });
    await addStudentService(course_id, student_id);
    const [examsFounds] = await getExamsByCourseIdService(course_id);
    const enrollToAllExamOfCoursePromises = examsFounds.map(({ exam_id }) =>
      studentEnrollToExamService(student_id, exam_id)
    );
    await Promise.all(enrollToAllExamOfCoursePromises);
    console.log(
      `Student with id = ${student_id} was enrolled to ${examsFounds?.length} exams`
    );
    const message = `Student with id = ${student_id} was enrrolled succesfully to Course with id = ${course_id}`;
    console.log(message);
    return res.status(201).json({
      message,
      err: false,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = {
  createEnrollmentValidator,
  createEnrollmentController,
};
