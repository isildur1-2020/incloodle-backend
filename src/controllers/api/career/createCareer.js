const createCareerService = require("../../../services/database/career/createCareer");

const createCareerController = async (req, res) => {
  try {
    const { name } = req.body;
    if (name === undefined)
      return res.status(400).json({
        err: true,
        message: "`name` field is required",
      });
    await createCareerService(name);
    const message = `Career ${name} was created succesfully!`;
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

module.exports = createCareerController;
