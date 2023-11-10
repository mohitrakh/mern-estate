const express = require("express");
const {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  Listings,
} = require("../controllers/listingController");
const verifyToken = require("../utils/verifyUser");
const router = express.Router();

router.route("/create").post(verifyToken, createListing);
router.route("/delete/:id").delete(verifyToken, deleteListing);
router.route("/update/:id").patch(verifyToken, updateListing);
router.route("/get/:id").get(getListing);
router.route("/get").get(Listings);

module.exports = router;
