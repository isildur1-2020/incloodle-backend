const { Router } = require("express");
const router = Router();
const createPeriodController = require("../../controllers/api/period/createPeriod");
const getAllPeriodController = require("../../controllers/api/period/getAllPeriod");
const updatePeriodController = require("../../controllers/api/period/updatePeriod");
const deletePeriodController = require("../../controllers/api/period/deletePeriod");

router.get("/", getAllPeriodController);
router.post("/", createPeriodController);
router.put("/:period_id", updatePeriodController);
router.delete("/:period_id", deletePeriodController);

module.exports = router;
