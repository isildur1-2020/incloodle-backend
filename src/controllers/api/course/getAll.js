const getAllCourseService = require("../../../services/database/course/getAll");

const getAllCourseController = async (req, res) => {
  try {
    const [coursesFound] = await getAllCourseService();
    return res.status(200).json({
      err: false,
      message: "Courses found succesfully!",
      data: coursesFound,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
      data: [],
    });
  }
};

module.exports = getAllCourseController;
