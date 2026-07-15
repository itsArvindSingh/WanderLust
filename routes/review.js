const express = require("express");
const router = express.Router({mergeParams: true}); 
const { listingSchema , reviewSchema } = require("../schema.js"); 
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const methodOverride = require("method-override");
const ExpressError = require("../utils/ExpressError.js");


router.use(methodOverride("_method"));
router.use(express.urlencoded({extended: true}));


function validateReview(req, res, next){
    let { error } = reviewSchema.validate(req.body);
    if (error){
        let  errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else {
        next();
    }
}

// Review 
// Post Route

router.post("/", 
    validateReview,
    wrapAsync(async (req, res, next) => {
        let listing = await Listing.findById(req.params.id);
        let newReview = new Review(req.body.review);

        await listing.reviews.push(newReview);

        await newReview.save();
        await listing.save();

        console.log("new review saved");
        res.redirect(`/listings/${listing._id}`);
}));

// delete review route
router.delete(
    "/:reviewId",
    wrapAsync(async (req, res, next) => {
        let { id, reviewId } = req.params; 

        await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
        await Review.findByIdAndDelete(reviewId);

        res.redirect(`/listings/${id}`);
    })
);

module.exports = router;