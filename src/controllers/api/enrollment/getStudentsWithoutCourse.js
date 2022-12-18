const getAllStudentsService = require("../../../services/database/student/getAll");
const getStudentsWithoutCourseService = require("../../../services/database/enrollment/getStudentsWithoutCourse");

const getStudentsWithoutCourseController = async (req, res) => {
  try {
    const { course_id } = req.params;
    if (course_id === undefined)
      return res.status(400).json({
        err: true,
        message: "`course_id` field is required",
      });
    if (isNaN(parseInt(course_id)))
      return res.status(400).json({
        err: true,
        message: "`course_id` field must be a number",
      });
    const [allStudentsFound] = await getAllStudentsService();
    const [enrollmentsFound] = await getStudentsWithoutCourseService(course_id);
    const studensToReturn = allStudentsFound.filter((student) => {
      const { student_id } = student;
      const isExists = enrollmentsFound.some(
        (enrollment) => enrollment?.student_id === student_id
      );
      return !isExists;
    });
    return res.status(200).json({
      err: false,
      data: studensToReturn,
      message: "Student found succesfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: false,
      message: err.message,
    });
  }
};

module.exports = { getStudentsWithoutCourseController };
