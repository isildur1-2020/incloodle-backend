const getAllExamService = require("../../../services/database/exam/getAll");

const getAllExamController = async (req, res) => {
  try {
    const [examsFound] = await getAllExamService();
    return res.status(200).json({
      err: false,
      message: "Exams found succesfully!",
      data: examsFound,
    });
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      err: true,
      message: err.message,
      data: null,
    });
  }
};

module.exports = getAllExamController;
