const getAdminByEmailService = require("../services/database/admin/getByEmail");

const existsEmailAdmin = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email)
      return res.status(200).json({
        err: true,
        message: "You must provide `email` field",
      });
    const [dataAdmin] = await getAdminByEmailService(email);
    if (dataAdmin?.length !== 0)
      return res.status(200).json({
        err: true,
        message: "Email is already in use",
      });
    next();
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = { existsEmailAdmin };
