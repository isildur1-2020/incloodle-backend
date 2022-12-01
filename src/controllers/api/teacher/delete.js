const deleteTeacherService = require("../../../services/database/teacher/delete");

const deleteTeacherController = async (req, res) => {
  try {
    const { teacher_id } = req.params;
    if (!teacher_id)
      return res.status(200).json({
        err: true,
        message: "You must provide `teacher_id` param",
      });
    await deleteTeacherService(teacher_id);
    const message = `Teacher with id = ${teacher_id} was deleted succesfully!`;
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

module.exports = deleteTeacherController;
