const getTeacherByEmailService = require("../services/database/teacher/getByEmail");

const existsTeacherEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email)
      return res.status(200).json({
        err: true,
        message: "You must provide `email` field",
      });
    const [dataTeacher] = await getTeacherByEmailService(email);
    if (dataTeacher?.length !== 0)
      return res.status(200).json({
        err: true,
        message: "Email is already in use",
      });
    next();
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = { existsTeacherEmail };
