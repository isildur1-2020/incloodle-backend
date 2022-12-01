const { Router } = require("express");
const router = Router();
const multerDocument = require("../../utils/multer/document");
const createDocumentController = require("../../controllers/api/document/create/create");
const deleteDocumentController = require("../../controllers/api/document/delete");
const getAllDocumentController = require("../../controllers/api/document/getAll");
const getDocumentByCourseIdController = require("../../controllers/api/document/getByCourse");
const {
  verifyCreateFields,
} = require("../../controllers/api/document/create/verifyFields");
const { isTeacher } = require("../../middlewares/isTeacher");
const { isTeacherOrStudent } = require("../../middlewares/isTeacherOrStudent");

router.get(
  "/:course_id/course",
  isTeacherOrStudent,
  getDocumentByCourseIdController
);
router.get("/", isTeacher, getAllDocumentController);
router.post(
  "/",
  isTeacher,
  verifyCreateFields,
  multerDocument.single("document"),
  createDocumentController
);
router.delete("/:document_id", isTeacher, deleteDocumentController);

module.exports = router;
