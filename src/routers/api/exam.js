const { Router } = require("express");
const router = Router();
const createExamController = require("../../controllers/api/exam/create/create");
const deleteExamController = require("../../controllers/api/exam/delete");
const getAllExamController = require("../../controllers/api/exam/getAll");
const getExamByCourseIdController = require("../../controllers/api/exam/getByCourse");
const {
  verifyCreateFields,
} = require("../../controllers/api/exam/create/verifyFields");
const multerExam = require("../../utils/multer/exams");
const { isTeacher } = require("../../middlewares/isTeacher");
const { isTeacherOrStudent } = require("../../middlewares/isTeacherOrStudent");

router.get(
  "/:course_id/course",
  isTeacherOrStudent,
  getExamByCourseIdController
);
router.get("/", isTeacher, getAllExamController);
router.post(
  "/",
  isTeacher,
  verifyCreateFields,
  multerExam.single("exam"),
  createExamController
);
router.delete("/:exam_id", isTeacher, deleteExamController);

module.exports = router;
