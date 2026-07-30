const express = require("express");
const router = express.Router();  
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const multer  = require('multer');
const {storage} = require("../config/cloudConfig.js");
const upload = multer({ storage })

const listingController = require("../controllers/listings.js");

// to show all listing and Create Route: to store new listing data in database
router.route("")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing));


// to add new listing 
router.get("/new", isLoggedIn, listingController.renderNewForm);

//  to show a particular listing info and to save edited dataf
router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// to edit listing
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm)); 

module.exports = router;