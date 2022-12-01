const updateCourseService = require("../../../services/database/course/update");

const updateCourseController = async (req, res) => {
  try {
    const { course_id } = req.params;
    const { name, period } = req.body;
    if (isNaN(parseInt(course_id)))
      return res.status(400).json({
        err: true,
        message: "`course_id` must be a number",
      });
    if (!name || !period)
      return res.status(400).json({
        err: true,
        message: "You must provide `name` and `period` fields",
      });
    await updateCourseService(name, period, course_id);
    const message = `Course with id = ${course_id} was updated succesfully`;
    console.log(message);
    return res.status(201).json({
      err: false,
      message,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = updateCourseController;
