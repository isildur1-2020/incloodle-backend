const createAdminService = require("../../../services/database/admin/create");

const createAdmin = async (req, res) => {
  try {
    const { email, name } = req.body;
    if (!name)
      return res.json({
        err: true,
        message: "You must provide `name` field",
      });
    await createAdminService(email, name, req.hashedPasswd);
    return res.status(201).json({
      err: false,
      message: "Admin created succesfully!",
    });
  } catch (err) {
    console.log(err.message);
    return res.status(200).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = createAdmin;
