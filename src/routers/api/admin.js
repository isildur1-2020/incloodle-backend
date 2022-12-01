const { Router } = require("express");
const router = Router();

const getAllController = require("../../controllers/api/admin/getAll");
const createAdminController = require("../../controllers/api/admin/create");
const deleteAdminController = require("../../controllers/api/admin/delete");
const getAdminByEmail = require("../../controllers/api/admin/getByEmail");
const { existsTeacherEmail } = require("../../middlewares/existsTeacherEmail");
const { encryptPassword } = require("../../middlewares/encryptPassword");

router.get("/", getAllController);
router.get("/email", getAdminByEmail);
router.post("/", existsTeacherEmail, encryptPassword, createAdminController);
router.delete("/:admin_id", deleteAdminController);

module.exports = router;
