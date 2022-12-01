const getEnrollToExamByStudentAndExamService = require("../../../../services/database/answers/getEnrollToExamByStudentAndExam");

const isAlreadyRate = async (req, res, next) => {
  try {
    const { exam_id } = req.body;
    const { student_id } = req.userPayload;
    const [enrollExamData] = await getEnrollToExamByStudentAndExamService(
      student_id,
      exam_id
    );
    const { studentExam_id, is_pendient } = enrollExamData?.[0];
    if (+is_pendient === 0)
      return res.status(400).json({
        err: true,
        message: "You already send answers to this exam",
      });
    req.studentExam_id = studentExam_id;
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = isAlreadyRate;
