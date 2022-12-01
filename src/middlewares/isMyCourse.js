const getCourseByTeacherAndCourse = require("../services/database/course/getByTeacherAndCourse");

const isMyCourse = async (req, res, next) => {
  try {
    const course_id = req.course_id;
    const { teacher_id } = req.userPayload;
    const [courseFound] = await getCourseByTeacherAndCourse(
      course_id,
      teacher_id
    );
    if (courseFound.length === 0)
      return res.status(403).json({
        err: true,
        message: "Sorry, but this course doesn't belong to you",
      });
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = { isMyCourse };
