const deleteEnrollToExamService = require("../../../services/database/answers/deleteEnrollToExam");

const deleteEnrollToExamController = async (req, res) => {
  try {
    const { studentExam_id } = req.params;
    if (isNaN(parseInt(studentExam_id)))
      return res.status(400).json({
        err: true,
        message: "`studentExam_id` is required and must be a number",
      });
    await deleteEnrollToExamService(studentExam_id);
    return res.status(200).json({
      err: false,
      message: `Enrollment to exam with id = ${studentExam_id} was removed succesfully!`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = deleteEnrollToExamController;
