const { Router } = require("express");
const router = Router();
const adminRouter = require("./admin");
const teacherRouter = require("./teacher");
const studentRouter = require("./student");
const courseRouter = require("./course");
const documentRouter = require("./document");
const examRouter = require("./exam");
const enrollmentRouter = require("./enrollment");
const answerController = require("./answer");
const { isRoot } = require("../../middlewares/isRoot");
const { isTeacher } = require("../../middlewares/isTeacher");

router.use("/admin", isRoot, adminRouter);
router.use("/teacher", teacherRouter);
router.use("/student", studentRouter);
router.use("/course", isTeacher, courseRouter);
router.use("/document", documentRouter);
router.use("/exam", examRouter);
router.use("/enrollment", isTeacher, enrollmentRouter);
router.use("/answer", answerController);

module.exports = router;
