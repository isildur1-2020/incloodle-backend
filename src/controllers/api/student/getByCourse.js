const getCourseByStudentService = require("../../../services/database/enrollment/getCourseByStudent");

const getCourseByStudentController = async (req, res) => {
  try {
    const { student_id } = req.userPayload;
    const [dataFound] = await getCourseByStudentService(student_id);
    return res.status(200).json({
      err: false,
      data: dataFound,
      message: "Courses found succesfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = getCourseByStudentController;
