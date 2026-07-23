const express = require("express");
const router = express.Router();  
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");

// to show all listing
router.get("", wrapAsync(listingController.index));

// to add new listing 
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Create Route: to store new listing data in database
router.post("", isLoggedIn, validateListing, wrapAsync(listingController.createListing));

//  to show a particular listing info
router.get("/:id", wrapAsync(listingController.showListing));

// to edit listing
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));
//  to save edited dataf
router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing));

// to delete lsiting
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;