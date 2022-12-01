const createAnswerService = require("../../../../services/database/answers/create");
const setIsExamPendientService = require("../../../../services/database/answers/setIsExamPendient");
const setAnswersTimeService = require("../../../../services/database/answers/setAnswersTime");
const { datetimeFormat } = require("../../../../utils/moment");

const sendAnswerController = async (req, res) => {
  try {
    const dataAnswers = req.dataAnswers;
    const studentExam_id = req.studentExam_id;
    const { student_id } = req.userPayload;
    const { exam_id, init_date } = req.body;
    const answersPromises = dataAnswers?.map((el) =>
      createAnswerService(el?.question_id, el?.answer_text, studentExam_id)
    );
    await Promise.all(answersPromises);
    await setIsExamPendientService(student_id, exam_id);
    await setAnswersTimeService(
      datetimeFormat(init_date),
      datetimeFormat(),
      studentExam_id
    );
    return res.status(200).json({
      err: false,
      message: "The answers was sent succesfully, thanks!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = sendAnswerController;
