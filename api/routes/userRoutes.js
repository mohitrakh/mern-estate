const express = require("express");
const {
  updateUser,
  test,
  deleteUser,
  userListing,
} = require("../controllers/userController");
const verifyToken = require("../utils/verifyUser");

const router = express.Router();

router.route("/").get(test);
router.route("/update/:id").post(verifyToken, updateUser);
router.route("/delete/:id").delete(verifyToken, deleteUser);
router.route("/listings/:id").get(verifyToken, userListing);

module.exports = router;
