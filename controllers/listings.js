const Listing = require("../models/listing.js");
const { getSortedCountries, getCountryName, getCountryCode } = require('../utils/countryHelpers.js');
const { getTypes, getCategories } = require("../utils/helpers.js");
const  ExpressError  = require("../utils/ExpressError.js");

module.exports.index = async (req,res) => {
    const filterCategory = req.query.category;

    const searchQuery = req.query.q?.trim();

    let allListings;

    

    if(searchQuery){
        const searchConditions = [{title: {$regex : searchQuery , $options: "i"}},
                {location: {$regex : searchQuery , $options: "i"}}];
        
        let countryCode;
        countryCode = getCountryCode(searchQuery);
        console.log("Search:", searchQuery);
        console.log("Country code:", getCountryCode(searchQuery));
        if(countryCode){
            searchConditions.push({country: countryCode});
        }

        allListings = await Listing.find(
            { $or: searchConditions}
        );
    }else if (filterCategory){
        allListings = await Listing.find({category: filterCategory});
    }else{
        allListings = await Listing.find();
    }

    res.render("listings/index", {allListings, filterCategory, getCountryName, getCategories} );
};


module.exports.renderNewForm = (req,res) => { 
    console.log(req.user);
    const countryList = getSortedCountries();
    res.render("listings/new.ejs", { countryList, getTypes, getCategories});
};

module.exports.createListing = async (req, res, next) => {
    // 1. Geocode the location provided in req.body.listing
    try{
        const locationQuery = req.body.listing.location + ', '+ getCountryName(req.body.listing.country);
        const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            locationQuery
        )}&format=geojson&limit=1`;

        const response = await fetch(geocodeUrl, {
            headers: {
                'User-Agent': 'WanderlustApp/1.0'
            }
        });

        if(!response.ok){
            throw new Error("Geocoding request failed");
        }

        const geoData = await response.json();
        
        if (!geoData.features || geoData.features.length === 0) {
            throw new ExpressError(
                400,
                "Could not find the location. Please enter a valid location."
            );
        }

        let url = req.file.path;
        let filename = req.file.filename;

        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = { url, filename };
        newListing.geometry = geoData.features[0].geometry; // { type: 'Point', coordinates: [lng, lat] }
        await newListing.save();
        req.flash("success", "New Listing Created");
        res.redirect("/listings");
    }catch (err){
        next(err);
    }
};

module.exports.showListing = async (req,res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id)
            .populate( 
                {
                    path :"reviews",
                        populate : {
                            path : "author"
                        }
                })
            .populate("owner");
        if(!listing){
            req.flash("error", "Listing you requested for does not exits.");
            res.redirect("/listings");
        }else{
            // console.log(listing.owner.username);
            res.render("listings/show", { listing, getCountryName })
    };
};

module.exports.renderEditForm = async (req,res) => {
        let { id } = req.params;
        let listing = await Listing.findById(id);
        if(!listing){
            req.flash("error", "Listing you requested for does not exits.");
            return res.redirect("/listings");
        }
        let originalImageUrl = listing.image.url;
        const countryList = getSortedCountries();
        originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250,c_fit");
        res.render("listings/edit", { listing, originalImageUrl, countryList });
        
};

module.exports.updateListing = async (req,res) => {
        let { id } = req.params;
        let updatedListing = await Listing.findByIdAndUpdate(id,{ ...req.body.listing  }, { validator: true, new: true});

        if(typeof req.file !== 'undefined' ){
            let url = req.file.path;
            let filename = req.file.filename;
            updatedListing.image = { url, filename };
            await updatedListing.save();
        }
        

        req.flash("success", "Listing Edited");
        res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req,res) => { 
        let { id } = req.params;
        await Listing.findByIdAndDelete(id);
        req.flash("success", "Listing Deleted");
        res.redirect("/listings");
};