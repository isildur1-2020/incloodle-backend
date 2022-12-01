const getAllEnrollmentService = require("../../../services/database/enrollment/getAll");

const getAllEnrollmentController = async (req, res) => {
  try {
    const [enrollmentsFound] = await getAllEnrollmentService();
    return res.status(200).json({
      err: false,
      data: enrollmentsFound,
      message: "Enrollments found succesfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      data: [],
      message: err.message,
    });
  }
};

module.exports = getAllEnrollmentController;
