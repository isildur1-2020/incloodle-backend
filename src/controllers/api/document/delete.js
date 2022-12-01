const deleteDocumentService = require("../../../services/database/document/delete");

const deleteDocumentController = async (req, res) => {
  try {
    const { document_id } = req.params;
    if (!document_id || isNaN(+document_id))
      return res.status(400).json({
        err: true,
        message: "You must provide `document_id",
      });
    await deleteDocumentService(document_id);
    const message = `Document with id = ${document_id} was deleted successfully!`;
    console.log(message);
    return res.status(200).json({
      message,
      err: false,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = deleteDocumentController;
