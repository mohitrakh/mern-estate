const express = require("express");
const {
  updateUser,
  test,
  deleteUser,
} = require("../controllers/userController");
const verifyToken = require("../utils/verifyUser");

const router = express.Router();

router.route("/").get(test);
router.route("/update/:id").post(verifyToken, updateUser);
router.route("/delete/:id").delete(verifyToken, deleteUser);

module.exports = router;
