const getAllPeriodService = require("../../../services/database/period/getAllPeriod");

const getAllPeriodController = async (req, res) => {
  try {
    const [periodsFound] = await getAllPeriodService();
    return res.status(200).json({
      err: false,
      data: periodsFound,
      message: "Periods found sucessfullly!",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = getAllPeriodController;
