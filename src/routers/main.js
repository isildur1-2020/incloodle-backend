const { Router } = require("express");
const router = Router();
const authRouter = require("./auth");
const apiRouter = require("./api");

router.use("/auth", authRouter);
router.use("/api", apiRouter);

module.exports = router;
