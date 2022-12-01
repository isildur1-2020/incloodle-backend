const setFinalScoreService = require("../../../services/database/course/setFinalScore");

const setFinalScoreController = async (req, res) => {
  try {
    const { student_id, course_id, final_score } = req.body;
    if (
      student_id === undefined ||
      course_id === undefined ||
      final_score === undefined
    )
      return res.status(400).json({
        err: true,
        message: "`student_id`, `course_id` and `final_score` are required",
      });
    if (
      isNaN(parseInt(student_id)) ||
      isNaN(parseInt(course_id)) ||
      isNaN(parseInt(final_score))
    )
      return res.status(400).json({
        err: true,
        message: "`student_id`, `course_id` and `final_score` must be a number",
      });
    await setFinalScoreService(course_id, student_id, final_score);
    return res.status(200).json({
      err: false,

      message: "The final score was updated succesfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = setFinalScoreController;
