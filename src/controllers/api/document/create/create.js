const createDocumentService = require("../../../../services/database/document/create");

const createDocumentController = async (req, res) => {
  try {
    const link = req.wholeFileName;
    if (!link)
      return res.status(400).json({
        err: true,
        message: "You must upload a file",
      });
    const { name, course_id } = req.query;
    await createDocumentService(name, link, course_id);
    const message = `Document created succesfully!`;
    console.log(message);
    return res.status(201).json({
      link,
      message,
      err: false,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      link: null,
      err: true,
      message: err.message,
    });
  }
};

module.exports = createDocumentController;
