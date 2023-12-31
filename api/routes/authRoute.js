const express = require("express");
const {
  signUp,
  signIn,
  google,
  signOut,
} = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);
router.route("/signout").get(signOut);
router.route("/google").post(google);

module.exports = router;
