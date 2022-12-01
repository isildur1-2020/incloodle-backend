const { Router } = require("express");
const router = Router();
const getAllCourseByTeacherIdController = require("../../controllers/api/course/getAllByTeacherId");
const createCourseController = require("../../controllers/api/course/create");
const getAllCourseController = require("../../controllers/api/course/getAll");
const updateCourseController = require("../../controllers/api/course/update");
const deleteCourseController = require("../../controllers/api/course/delete");
const setFinalScoreController = require("../../controllers/api/course/setFinalScore");

router.get("/:teacher_id/teacher", getAllCourseByTeacherIdController);
router.get("/", getAllCourseController);
router.post("/", createCourseController);
router.post("/final-score", setFinalScoreController);
router.put("/:course_id", updateCourseController);
router.delete("/:course_id", deleteCourseController);

module.exports = router;
