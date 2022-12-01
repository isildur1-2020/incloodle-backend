const { Router } = require("express");
const router = Router();
const createStudentController = require("../../controllers/api/student/create");
const { existsEmailAdmin } = require("../../middlewares/existsAdminEmail");
const getAllExamsByStudentController = require("../../controllers/api/student/getAllExams");
const getAllDocumentsByStudentController = require("../../controllers/api/student/getAllDocuments");
const getExamsRatedController = require("../../controllers/api/student/getExamsRated");
const resetPasswordController = require("../../controllers/api/student/resetPassword");
const { existsTeacherEmail } = require("../../middlewares/existsTeacherEmail");
const { encryptPassword } = require("../../middlewares/encryptPassword");
const examsPendientController = require("../../controllers/api/student/examsPendient");
const getStudentByCourseController = require("../../controllers/api/student/getByCourse");
const getAllStudentController = require("../../controllers/api/student/getAll");
const updateStudentController = require("../../controllers/api/student/update");
const deleteStudentController = require("../../controllers/api/student/delete");
const { isAdmin } = require("../../middlewares/isAdmin");
const { isStudent } = require("../../middlewares/isStudent");
const { isTeacherOrAdmin } = require("../../middlewares/isTeacherOrAdmin");

router.get("/allDocuments", isStudent, getAllDocumentsByStudentController);
router.get("/allExams", isStudent, getAllExamsByStudentController);
router.get("/:course_id/exams-pendient", isStudent, examsPendientController);
router.get("/:course_id/exams-rated", isStudent, getExamsRatedController);
router.get("/courseByStudent", isStudent, getStudentByCourseController);
router.get("/", isTeacherOrAdmin, getAllStudentController);
router.post(
  "/",
  isAdmin,
  existsEmailAdmin,
  existsTeacherEmail,
  encryptPassword,
  createStudentController
);
router.post("/reset-password", isStudent, resetPasswordController);
router.put("/:student_id", isAdmin, updateStudentController);
router.delete("/:student_id", isAdmin, deleteStudentController);

module.exports = router;
