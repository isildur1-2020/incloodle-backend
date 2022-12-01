const getExamByIdService = require("../../../../services/database/exam/getExamById");

const numberOfAnswers = async (req, res, next) => {
  try {
    const { exam_id } = req.body;
    const dataAnswers = req.dataAnswers;
    const [examFound] = await getExamByIdService(exam_id);
    if (examFound?.length === 0)
      return res.status(400).json({
        err: true,
        message: `The exam with id = ${exam_id} doesn't exists`,
      });
    const { num_of_questions } = examFound?.[0];
    if (num_of_questions !== dataAnswers?.length)
      return res.status(400).json({
        err: true,
        message: `num_of_questions = ${num_of_questions} isn't equal to number of answers = ${dataAnswers?.length}`,
      });
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = numberOfAnswers;
