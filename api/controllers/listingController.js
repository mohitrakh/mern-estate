const Listing = require("../models/listingModel");

const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create({ userRef: req.user.id, ...req.body });
    res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

module.exports = { createListing };
