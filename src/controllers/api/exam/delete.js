const deleteExamService = require("../../../services/database/exam/delete");

const deleteExamController = async (req, res) => {
  try {
    const { exam_id } = req.params;
    if (!exam_id || isNaN(+exam_id))
      return res.status(400).json({
        err: true,
        message: "You must provide `exam_id",
      });
    await deleteExamService(exam_id);
    const message = `Exam with id = ${exam_id} was deleted successfully!`;
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

module.exports = deleteExamController;
