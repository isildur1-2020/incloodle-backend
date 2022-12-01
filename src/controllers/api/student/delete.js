const deleteStudentService = require("../../../services/database/student/delete");

const deleteStudentController = async (req, res) => {
  try {
    const { student_id } = req.params;
    if (!student_id)
      return res.status(200).json({
        err: true,
        message: "You must provide `student_id` param",
      });
    await deleteStudentService(student_id);
    const message = `Student with id = ${student_id} was deleted successfully!`;
    console.log(message);
    return res.status(200).json({
      message,
      err: false,
    });
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = deleteStudentController;
