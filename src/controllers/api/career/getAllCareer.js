const getAllCareerService = require("../../../services/database/career/getAllCareer");

const getAllCareerController = async (req, res) => {
  try {
    const [careersFound] = await getAllCareerService();
    return res.status(200).json({
      err: false,
      data: careersFound,
      message: "Careers found sucessfullly!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = getAllCareerController;
