const updatePeriodService = require("../../../services/database/period/updatePeriod");

const updatePeriodController = async (req, res) => {
  try {
    const { period_id } = req.params;
    const { name } = req.body;
    if (period_id === undefined || name === undefined)
      return res.status(400).json({
        err: true,
        message: "`period_id` and `name` fields is required",
      });
    if (isNaN(parseInt(period_id)))
      return res.status(400).json({
        err: true,
        message: "`name` field must be a number",
      });
    await updatePeriodService(name, period_id);
    const message = `Period with id = ${period_id} was updated succesfully!`;
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

module.exports = updatePeriodController;
