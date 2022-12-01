const getExamByCourseIdService = require("../../../services/database/exam/getByCourse");

const getExamByCourseIdController = async (req, res) => {
  try {
    const { course_id } = req.params;
    if (!course_id || isNaN(+course_id))
      return res.status(400).json({
        err: true,
        message: "You must provide `course_id",
      });
    const [examsFound] = await getExamByCourseIdService(course_id);
    return res.status(200).json({
      err: false,
      message: "Exams found succesfully!",
      data: examsFound,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
      data: null,
    });
  }
};

module.exports = getExamByCourseIdController;
