const createPeriodService = require("../../../services/database/period/createPeriod");

const createPeriodController = async (req, res) => {
  try {
    const { name } = req.body;
    if (name === undefined)
      return res.status(400).json({
        err: true,
        message: "`name` field is required",
      });
    await createPeriodService(name);
    const message = `Period ${name} was created succesfully!`;
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

module.exports = createPeriodController;
