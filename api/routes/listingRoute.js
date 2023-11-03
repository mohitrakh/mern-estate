const express = require("express");
const {
  createListing,
  deleteListing,
  updateListing,
  getListing,
} = require("../controllers/listingController");
const verifyToken = require("../utils/verifyUser");
const router = express.Router();

router.route("/create").post(verifyToken, createListing);
router.route("/delete/:id").delete(verifyToken, deleteListing);
router.route("/update/:id").patch(verifyToken, updateListing);
router.route("/get/:id").get(getListing);

module.exports = router;
