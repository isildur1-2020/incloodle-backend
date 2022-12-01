const getAllCourseByTeacherIdService = require("../../../services/database/course/getAllByTeacherId");

const getAllCourseByTeacherIdController = async (req, res) => {
  try {
    const { teacher_id } = req.params;
    if (!teacher_id)
      return res.status(400).json({
        err: true,
        data: [],
        message: "You must provide `teacher_id` param",
      });
    if (isNaN(parseInt(teacher_id)))
      return res.status(400).json({
        err: true,
        data: [],
        message: "`teacher_id` param must be a number",
      });
    const [coursesFound] = await getAllCourseByTeacherIdService(teacher_id);
    return res.status(200).json({
      err: false,
      data: coursesFound,
      message: "Courses found succesfully!",
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

module.exports = getAllCourseByTeacherIdController;
