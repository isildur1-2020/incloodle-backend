const getAllDocumentService = require("../../../services/database/document/getAll");

const getAllDocumentController = async (req, res) => {
  try {
    const [documentsFound] = await getAllDocumentService();
    return res.status(200).json({
      err: false,
      message: "Documents found succesfully!",
      data: documentsFound,
    });
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      err: true,
      message: err.message,
      data: null,
    });
  }
};

module.exports = getAllDocumentController;
