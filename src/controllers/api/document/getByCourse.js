const getDocumentByCourseIdService = require("../../../services/database/document/getByCourse");

const getDocumentByCourseIdController = async (req, res) => {
  try {
    const { course_id } = req.params;
    if (!course_id || isNaN(+course_id))
      return res.status(400).json({
        err: true,
        message: "You must provide `course_id",
      });
    const [documentFound] = await getDocumentByCourseIdService(course_id);
    return res.status(200).json({
      err: false,
      message: "Documents found succesfully!",
      data: documentFound,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
      data: null,
    });
  }
};

module.exports = getDocumentByCourseIdController;
