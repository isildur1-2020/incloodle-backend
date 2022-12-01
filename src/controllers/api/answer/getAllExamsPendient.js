const getAllExamsPendientService = require("../../../services/database/answers/getAllExamsPendient");

const getAllExamsPendientValidator = (req, res, next) => {
  try {
    const { course_id } = req.params;
    if (isNaN(course_id))
      return res.status(400).json({
        err: true,
        message: "`course_id` is required and must be a number",
      });
    req.course_id = course_id;
    next();
  } catch (err) {
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

const getAllExamsPendientController = async (req, res) => {
  try {
    const { course_id } = req.params;
    const [examsFound] = await getAllExamsPendientService(course_id);
    return res.status(200).json({
      err: false,
      data: examsFound,
      message: "Exams to rate found successfully!",
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
  getAllExamsPendientValidator,
  getAllExamsPendientController,
};
