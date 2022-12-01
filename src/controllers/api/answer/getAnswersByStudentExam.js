const getAnswersByStudentExamService = require("../../../services/database/answers/getAnswersByStudentExam");

const getAnswersByStudentExamController = async (req, res) => {
  try {
    const { studentExam_id } = req.params;
    if (isNaN(studentExam_id))
      return res.status(400).json({
        err: true,
        message: "`studentExam_id is required and must be a number",
      });
    const [answersFound] = await getAnswersByStudentExamService(studentExam_id);
    return res.status(200).json({
      err: false,
      data: answersFound,
      message: "Answers found succesfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = getAnswersByStudentExamController;
