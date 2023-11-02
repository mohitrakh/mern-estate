const express = require("express");
const {
  createListing,
  deleteListing,
} = require("../controllers/listingController");
const verifyToken = require("../utils/verifyUser");
const router = express.Router();

router.route("/create").post(verifyToken, createListing);
router.route("/delete/:id").delete(verifyToken, deleteListing);

module.exports = router;
