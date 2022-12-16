const updateAnswerService = require("../../../services/database/answers/updateAnswer");

const updateAnswerController = async (req, res) => {
  try {
    const { is_correct, comment, score, answer_id } = req.body;
    if (
      (is_correct === undefined ||
        answer_id === undefined ||
        comment === undefined,
      score === undefined)
    )
      return res.status(400).json({
        err: true,
        message:
          "`is_correct`, `answer_id`, `comment` and `score` are required",
      });
    if (
      isNaN(parseInt(is_correct)) ||
      isNaN(parseInt(answer_id)) ||
      isNaN(parseInt(score))
    )
      return res.status(400).json({
        err: true,
        message: "`is_correct`, `answer_id` and `score` must be a number",
      });
    await updateAnswerService(is_correct, comment, score, answer_id);
    const message = `Answer with id = ${answer_id} was updated succesfully`;
    console.log(message);
    return res.status(200).json({
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

module.exports = updateAnswerController;
