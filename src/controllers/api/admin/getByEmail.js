const getByEmailService = require("../../../services/database/admin/getByEmail");

const getByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    console.log(email);
    if (!email)
      return res.json({
        err: true,
        message: "You must provide an email query string",
      });
    const resp = await getByEmailService(email);
    return res.status(200).json({
      err: false,
      message: "Admin found succesfully!",
      data: resp?.[0],
    });
  } catch (err) {
    console.log(err.message);
    return res.status(200).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = getByEmail;
