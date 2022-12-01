const rateExamService = require("../../../services/database/answers/rateExam");

const rateExamController = async (req, res) => {
  try {
    const { score, studentExam_id } = req.body;
    if (!score || !studentExam_id)
      return res.status(400).json({
        err: true,
        message: "`score` and `studentExam_id` are required",
      });
    if (isNaN(parseInt(score)) || isNaN(parseInt(studentExam_id)))
      return res.status(400).json({
        err: true,
        message: "`score` and `studentExam_id` must be a number",
      });
    await rateExamService(score, studentExam_id);
    return res.status(200).json({
      err: false,
      message: "Score was updated succesfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = rateExamController;
