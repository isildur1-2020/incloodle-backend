const { Router } = require("express");
const router = Router();
const adminRouter = require("./admin");
const teacherRouter = require("./teacher");
const studentRouter = require("./student");
const courseRouter = require("./course");
const documentRouter = require("./document");
const examRouter = require("./exam");
const enrollmentRouter = require("./enrollment");
const answerRouter = require("./answer");
const careerRouter = require("./career");
const periodRouter = require("./period");
const { isRoot } = require("../../middlewares/isRoot");
const { isTeacher } = require("../../middlewares/isTeacher");

router.use("/admin", isRoot, adminRouter);
router.use("/teacher", teacherRouter);
router.use("/student", studentRouter);
router.use("/course", isTeacher, courseRouter);
router.use("/document", documentRouter);
router.use("/exam", examRouter);
router.use("/enrollment", isTeacher, enrollmentRouter);
router.use("/answer", answerRouter);
router.use("/career", careerRouter);
router.use("/period", periodRouter);

module.exports = router;
