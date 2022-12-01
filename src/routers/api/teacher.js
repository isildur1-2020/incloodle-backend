const { Router } = require("express");
const router = Router();
const getAllTeacherController = require("../../controllers/api/teacher/getAll");
const createTeacherController = require("../../controllers/api/teacher/create");
const updateTeacherController = require("../../controllers/api/teacher/update");
const deleteTeacherController = require("../../controllers/api/teacher/delete");
const getReportController = require("../../controllers/api/teacher/getReport");
const resetPasswordController = require("../../controllers/api/teacher/resetPassword");
const { existsEmailAdmin } = require("../../middlewares/existsAdminEmail");
const { encryptPassword } = require("../../middlewares/encryptPassword");
const { isAdmin } = require("../../middlewares/isAdmin");
const { isTeacherOrAdmin } = require("../../middlewares/isTeacherOrAdmin");
const { isTeacher } = require("../../middlewares/isTeacher");
// const { isTeacherOrStudent } = require("../../middlewares/isTeacherOrStudent");

router.get("/report", getReportController);
router.get("/", isTeacherOrAdmin, getAllTeacherController);
router.post(
  "/",
  isAdmin,
  existsEmailAdmin,
  encryptPassword,
  createTeacherController
);
router.post("/reset-password", isTeacher, resetPasswordController);
router.put("/:teacher_id", isAdmin, updateTeacherController);
router.delete("/:teacher_id", isAdmin, deleteTeacherController);

module.exports = router;
