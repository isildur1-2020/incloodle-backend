const getAllEnrollmentExamService = require("../../../services/database/answers/getAllEnrollmentExam");

const getAllEnrollmentExamController = async (req, res) => {
  try {
    const [enrollmentsFound] = await getAllEnrollmentExamService();
    return res.status(200).json({
      err: false,
      data: enrollmentsFound,
      message: "Enrollments to exams found succesfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = getAllEnrollmentExamController;
