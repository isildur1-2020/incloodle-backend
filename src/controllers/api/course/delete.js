const deleteCourseService = require("../../../services/database/course/delete");

const deleteCourseController = async (req, res) => {
  try {
    const { course_id } = req.params;
    if (isNaN(parseInt(course_id)))
      return res.status(400).json({
        err: true,
        message: "`course_id` must be a number",
      });
    await deleteCourseService(course_id);
    const message = `Course with id = ${course_id} was deleted succesfully!`;
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

module.exports = deleteCourseController;
