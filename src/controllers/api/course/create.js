const createCourseService = require("../../../services/database/course/create");

const createCourseController = async (req, res) => {
  try {
    const { name, period, teacher_id } = req.body;
    if (!name || !period || !teacher_id)
      return res.status(400).json({
        err: true,
        message: "You must provide `name` `period` and `teacher_id` fields",
      });
    await createCourseService(name, period, teacher_id);
    const message = `Course: ${name} was created successfully!`;
    return res.status(201).json({
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

module.exports = createCourseController;
