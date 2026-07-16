const express = require("express");
const router = express.Router(); 
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema , reviewSchema } = require("../schema.js"); 
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const methodOverride = require("method-override");


router.use(methodOverride("_method"));
router.use(express.urlencoded({extended: true}));


function validateListing(req, res, next){
    let { error } = listingSchema.validate(req.body);
    if (error){
        let  errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else {
        next();
    }
}

// to show all listing
router.get("", 
    wrapAsync(async (req,res) => {
        const allListings = await Listing.find();
        res.render("listings/index", {allListings} );
}));

// to add new listing 
router.get("/new", (req,res) => {
    res.render("listings/new");
});

// Create Route: to store new listing data in database
router.post("", 
    validateListing,
    wrapAsync(async (req, res, next) => {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        req.flash("success", "New Listing Created");
        res.redirect("/listings");
}));

//  to show a particular listing info
router.get("/:id", 
    wrapAsync(async (req,res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id).populate("reviews");
        if(!listing){
            req.flash("error", "Listing you requested for does not exits.");
            res.redirect("/listings");
        }else{
        res.render("listings/show", { listing })
    };
}));

// to edit listing
router.get("/:id/edit", 
    wrapAsync(async (req,res) => {
        let { id } = req.params;
        let listing = await Listing.findById(id);
        if(!listing){
            req.flash("error", "Listing you requested for does not exits.");
            res.redirect("/listings");
        }else{
            res.render("listings/edit", { listing });
        }
}));
//  to save edited data
router.put("/:id", 
    validateListing,
    wrapAsync(async (req,res) => {
        let { id } = req.params;
        await Listing.findByIdAndUpdate(id,{ ...req.body.listing  }, { validator: true, new: true});
        req.flash("success", "Listing Edited");
        res.redirect(`/listings/${id}`);
}));

// to delete lsiting
router.delete("/:id", 
    wrapAsync(async (req,res) => { 
        let { id } = req.params;
        await Listing.findByIdAndDelete(id);
        req.flash("success", "Listing Deleted");
        res.redirect("/listings");
}));


module.exports = router;