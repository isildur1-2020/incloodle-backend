const getAllStudentService = require("../../../services/database/student/getAll");

const getAllStudentController = async (req, res) => {
  try {
    const [studentData] = await getAllStudentService();
    return res.status(200).json({
      err: false,
      message: "Students found succesfully!",
      data: studentData,
    });
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      err: true,
      data: null,
      message: err.message,
    });
  }
};

module.exports = getAllStudentController;
