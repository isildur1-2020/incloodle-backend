const deleteCareerService = require("../../../services/database/career/deleteCareer");

const deleteCareerController = async (req, res) => {
  try {
    const { career_id } = req.params;
    if (career_id === undefined)
      return res.status(400).json({
        err: true,
        message: "`career_id` param is required",
      });
    if (isNaN(parseInt(career_id)))
      return res.status(400).json({
        err: true,
        message: "`career_id` param must be a number",
      });
    await deleteCareerService(career_id);
    const message = `Career with id = ${career_id} was deleted succesfully!`;
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

module.exports = deleteCareerController;
