const getExamsRatedService = require("../../../services/database/student/getExamsRated");

const getExamsRatedController = async (req, res) => {
  try {
    const { course_id } = req.params;
    const { student_id } = req.userPayload;
    if (isNaN(course_id))
      return res.status(400).json({
        err: true,
        data: [],
        message: "`course_id` is required and must be a number",
      });
    const [examsFound] = await getExamsRatedService(student_id, course_id);
    return res.status(200).json({
      err: false,
      data: examsFound,
      message: "Exams found succesfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = getExamsRatedController;
