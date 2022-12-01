const { Router } = require("express");
const router = Router();

const {
  createEnrollmentValidator,
  createEnrollmentController,
} = require("../../controllers/api/enrollment/create");
const {
  getStudentByCourseValidator,
  getStudentByCourseController,
} = require("../../controllers/api/enrollment/getStudentByCourse");
const getAllEnrollmentController = require("../../controllers/api/enrollment/getAll");
const {
  deleteEnrollmentValidator,
  deleteEnrollmentController,
} = require("../../controllers/api/enrollment/delete");
const { isMyCourse } = require("../../middlewares/isMyCourse");

router.get(
  "/studentByCourse",
  getStudentByCourseValidator,
  isMyCourse,
  getStudentByCourseController
);
router.get("/all", getAllEnrollmentController);
router.post(
  "/",
  createEnrollmentValidator,
  isMyCourse,
  createEnrollmentController
);
router.delete(
  "/",
  deleteEnrollmentValidator,
  isMyCourse,
  deleteEnrollmentController
);

module.exports = router;
