const getCourseByStudentService = require("../../../services/database/enrollment/getCourseByStudent");
const getDocumentByCourseIdService = require("../../../services/database/document/getByCourse");

const getAllDocumentsByStudentController = async (req, res) => {
  try {
    const { student_id } = req.userPayload;
    const [coursesFound] = await getCourseByStudentService(student_id);
    const documentPromises = coursesFound.map(({ course_id }) =>
      getDocumentByCourseIdService(course_id)
    );
    const documentsFullResp = await Promise.all(documentPromises);
    const documentsFound = documentsFullResp.reduce(
      (prev, curr) => [...prev, ...curr[0]],
      []
    );
    res.status(200).json({
      err: false,
      data: documentsFound,
      message: "All documents by student found successfully!",
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

module.exports = getAllDocumentsByStudentController;
