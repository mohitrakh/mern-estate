const express = require("express");
const { createListing } = require("../controllers/listingController");
const verifyToken = require("../utils/verifyUser");
const router = express.Router();

router.route("/create").post(verifyToken, createListing);

module.exports = router;
