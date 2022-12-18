const updateCareerService = require("../../../services/database/career/updateCareer");

const updateCareerController = async (req, res) => {
  try {
    const { career_id } = req.params;
    const { name } = req.body;
    if (career_id === undefined || name === undefined)
      return res.status(400).json({
        err: true,
        message: "`career_id` and `name` fields is required",
      });
    if (isNaN(parseInt(career_id)))
      return res.status(400).json({
        err: true,
        message: "`name` field must be a number",
      });
    await updateCareerService(name, career_id);
    const message = `Career with id = ${career_id} was updated succesfully!`;
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

module.exports = updateCareerController;
