const Listing = require("../models/listing.js");

module.exports.index = async (req,res) => {
        const allListings = await Listing.find();
        res.render("listings/index", {allListings} );
};

module.exports.renderNewForm = (req,res) => { 
        console.log(req.user);
        res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res, next) => {
    // 1. Geocode the location provided in req.body.listing
    const locationQuery = req.body.listing.location;
    const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        locationQuery
    )}&format=geojson&limit=1`;

    const response = await fetch(geocodeUrl, {
        headers: {
            'User-Agent': 'WanderlustApp/1.0'
        }
    });

    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    if (geoData.features && geoData.features.length > 0) {
        newListing.geometry = geoData.features[0].geometry; // { type: 'Point', coordinates: [lng, lat] }
    }

    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
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
            res.render("listings/show", { listing })
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
        originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250,c_fit");
        res.render("listings/edit", { listing, originalImageUrl });
        
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