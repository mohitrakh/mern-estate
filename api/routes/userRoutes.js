const express = require("express");
const { updateUser, test } = require("../controllers/userController");
const verifyToken = require("../utils/verifyUser");

const router = express.Router();

router.route("/").get(test);
router.route("/update/:id").post(verifyToken, updateUser);

module.exports = router;
