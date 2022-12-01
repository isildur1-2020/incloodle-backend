const { compareHash, createHash } = require("../../../utils/bcrypt");
const getStudentByIdService = require("../../../services/database/student/getById");
const resetPasswordService = require("../../../services/database/student/resetPassword");

const resetPasswordController = async (req, res) => {
  try {
    const { student_id } = req.userPayload;
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword)
      return res.status(400).json({
        err: true,
        message: "`currentPassword` and `newPassword` are required",
      });
    const [studentFound] = await getStudentByIdService(student_id);
    if (studentFound?.length === 0)
      return res.status(400).json({
        err: true,
        message: "Not student found",
      });
    const { passwd } = studentFound?.[0];
    const isPasswordValid = compareHash(currentPassword, passwd);
    if (!isPasswordValid)
      return res.status(400).json({
        err: true,
        message: "Incorrect credentials",
      });
    await resetPasswordService(createHash(newPassword), student_id);
    const message = `Student with id = ${student_id} was updated succesfully!`;
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
