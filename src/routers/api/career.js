const { Router } = require("express");
const router = Router();
const createCareerController = require("../../controllers/api/career/createCareer");
const getAllCareerController = require("../../controllers/api/career/getAllCareer");
const updateCareerController = require("../../controllers/api/career/updateCareer");
const deleteCareerController = require("../../controllers/api/career/deleteCareer");

router.get("/", getAllCareerController);
router.post("/", createCareerController);
router.put("/:career_id", updateCareerController);
router.delete("/:career_id", deleteCareerController);

module.exports = router;
