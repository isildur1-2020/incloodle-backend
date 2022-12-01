const createTeacherService = require("../../../services/database/teacher/create");

const createTeacherController = async (req, res) => {
  try {
    const { email, name, rut } = req.body;
    if (!name || !rut)
      return res.status(200).json({
        err: true,
        message: "You must provide all request fields",
      });
    await createTeacherService(email, name, rut, req.hashedPasswd);
    const message = `Teacher: ${name}, was created succesfully!`;
    console.log(message);
    return res.status(201).json({
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

module.exports = createTeacherController;
