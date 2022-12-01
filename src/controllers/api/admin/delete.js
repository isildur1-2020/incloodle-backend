const deleteAdminService = require("../../../services/database/admin/delete");

const deleteAdmin = async (req, res) => {
  try {
    const { admin_id } = req.params;
    if (!admin_id)
      return res.json({
        err: true,
        message: "You must provide admin_id param",
      });
    await deleteAdminService(admin_id);
    return res.json({
      err: false,
      message: `Admin with admin_id=${admin_id} was deleted succesfully!`,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = deleteAdmin;
