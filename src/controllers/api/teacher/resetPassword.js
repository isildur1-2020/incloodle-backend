const { compareHash, createHash } = require("../../../utils/bcrypt");
const getTeacherByIdService = require("../../../services/database/teacher/getById");
const resetPasswordService = require("../../../services/database/teacher/resetPassword");

const resetPasswordController = async (req, res) => {
  try {
    const { teacher_id } = req.userPayload;
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword)
      return res.status(400).json({
        err: true,
        message: "`currentPassword` and `newPassword` are required",
      });
    const [teacherFound] = await getTeacherByIdService(teacher_id);
    if (teacherFound?.length === 0)
      return res.status(400).json({
        err: true,
        message: "Not teacher found",
      });
    const { passwd } = teacherFound?.[0];
    const isPasswordValid = compareHash(currentPassword, passwd);
    if (!isPasswordValid)
      return res.status(400).json({
        err: true,
        message: "Incorrect credentials",
      });
    await resetPasswordService(createHash(newPassword), teacher_id);
    const message = `Student with id = ${teacher_id} was updated succesfully!`;
    console.log(message);
    return res.status(200).json({
      message,
      err: false,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = resetPasswordController;
