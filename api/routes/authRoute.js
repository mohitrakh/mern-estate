const express = require("express");
const { signUp, signIn, google } = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);
router.route("/google").post(google);

module.exports = router;
