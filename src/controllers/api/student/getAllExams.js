const getCourseByStudentService = require("../../../services/database/enrollment/getCourseByStudent");
const getExamByCourseIdService = require("../../../services/database/exam/getByCourse");

const getAllExamsByStudentController = async (req, res) => {
  try {
    const { student_id } = req.userPayload;
    const [coursesFound] = await getCourseByStudentService(student_id);
    const examPromises = coursesFound.map(({ course_id }) =>
      getExamByCourseIdService(course_id)
    );
    const examsFullResp = await Promise.all(examPromises);
    const examsFound = examsFullResp.reduce(
      (prev, curr) => [...prev, ...curr[0]],
      []
    );
    res.status(200).json({
      err: false,
      data: examsFound,
      message: "All exams by student found successfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      data: null,
      message: err.message,
    });
  }
};

module.exports = getAllExamsByStudentController;
