const getAllAdminService = require("../../../services/database/admin/getAll");

const getAllAdmin = async (req, res) => {
  try {
    const resp = await getAllAdminService();
    return res.status(200).json({
      err: false,
      message: "Data found succesfully!",
      data: resp?.[0],
    });
  } catch (err) {
    console.log(err.message);
    return res.status(200).json({
      err: true,
      message: err.message,
      data: null,
    });
  }
};

module.exports = getAllAdmin;
