const { Router } = require("express");
const router = Router();
const foundRole = require("../controllers/auth/signup/foundRole");
const comparePassword = require("../controllers/auth/signup/password");
const authentication = require("../controllers/auth/signup/jwt");
const verifyTokenController = require("../controllers/auth/verifyToken");

router.post("/", foundRole, comparePassword, authentication);
router.post("/verify-token", verifyTokenController);

module.exports = router;
