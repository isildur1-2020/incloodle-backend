const getAllTeacherService = require("../../../services/database/teacher/getAll");

const getAllTeacher = async (req, res) => {
  try {
    const [teacherData] = await getAllTeacherService();
    return res.status(200).json({
      err: false,
      message: "Teachers found succesfully!",
      data: teacherData,
    });
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      err: true,
      data: null,
      message: err.message,
    });
  }
};

module.exports = getAllTeacher;
