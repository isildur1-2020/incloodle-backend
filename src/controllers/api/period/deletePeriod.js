const deletePeriodService = require("../../../services/database/period/deletePeriod");

const deletePeriodController = async (req, res) => {
  try {
    const { period_id } = req.params;
    if (period_id === undefined)
      return res.status(400).json({
        err: true,
        message: "`period_id` param is required",
      });
    if (isNaN(parseInt(period_id)))
      return res.status(400).json({
        err: true,
        message: "`period_id` param must be a number",
      });
    await deletePeriodService(period_id);
    const message = `Period with id = ${period_id} was deleted succesfully!`;
    console.log(message);
    return res.status(200).json({
      err: false,
      message,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = deletePeriodController;
