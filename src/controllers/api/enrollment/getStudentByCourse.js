const getStudentByCourseService = require("../../../services/database/enrollment/getStudentByCourse");

const getStudentByCourseValidator = (req, res, next) => {
  const { course_id } = req.query;
  if (!course_id)
    return res.status(400).json({
      err: true,
      message: "You must provide `course_id` field",
    });
  if (isNaN(parseInt(course_id)))
    return res.status(400).json({
      err: true,
      message: "`course_id` field must be a number",
    });
  req.course_id = course_id;
  next();
};

const getStudentByCourseController = async (req, res) => {
  try {
    const { course_id } = req.query;
    const [dataFound] = await getStudentByCourseService(course_id);
    res.status(200).json({
      err: false,
      message: "Enrollments found succesfully!",
      data: dataFound,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = { getStudentByCourseValidator, getStudentByCourseController };
