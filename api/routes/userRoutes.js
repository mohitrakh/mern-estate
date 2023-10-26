const express = require("express");
const test = require("../controllers/userController");

const router = express.Router();

router.route("/").get(test);

module.exports = router;
