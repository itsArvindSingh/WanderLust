// ========== LOAD ENVIRONMENT VARIABLES FIRST ==========
require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");

// ========== VIEW ENGINE SETUP ==========
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ========== MIDDLEWARE ==========
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ========== DATABASE CONNECTION ==========
// Use environment variable for production, fallback to local for development
const dbUrl = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    try {
        await mongoose.connect(dbUrl);
        console.log("✅ Successfully connected to MongoDB");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        // Don't exit in production, let it retry
        if (process.env.NODE_ENV !== 'production') {
            process.exit(1);
        }
    }
}

main();

// ========== ROUTES ==========

// Root route
app.get("/", (req, res) => {
    res.send("Hi I am root");
});

// Validation middleware
function validateListing(req, res, next) {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

// Check route (for testing)
app.post("/check", async (req, res, next) => {
    console.log(req.body);
    res.send("Check route working");
});

// ========== LISTINGS ROUTES ==========

// Show all listings
app.get("/listings",
    wrapAsync(async (req, res) => {
        const allListings = await Listing.find();
        res.render("listings/index", { allListings });
    })
);

// Show new listing form
app.get("/listings/new", (req, res) => {
    res.render("listings/new");
});

// Create new listing
app.post("/listings",
    validateListing,
    wrapAsync(async (req, res, next) => {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    })
);

// Show edit form
app.get("/listings/:id/edit",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        let listing = await Listing.findById(id);
        if (!listing) {
            throw new ExpressError(404, "Listing not found");
        }
        res.render("listings/edit", { listing });
    })
);

// Update listing
app.put("/listings/:id",
    validateListing,
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        let updatedListing = await Listing.findByIdAndUpdate(
            id,
            { ...req.body.listing },
            { runValidators: true, new: true }
        );
        if (!updatedListing) {
            throw new ExpressError(404, "Listing not found");
        }
        res.redirect(`/listings/${id}`);
    })
);

// Delete listing
app.delete("/listings/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        let deletedListing = await Listing.findByIdAndDelete(id);
        if (!deletedListing) {
            throw new ExpressError(404, "Listing not found");
        }
        res.redirect("/listings");
    })
);

// Show single listing
app.get("/listings/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        if (!listing) {
            throw new ExpressError(404, "Listing not found");
        }
        res.render("listings/show", { listing });
    })
);

// ========== ERROR HANDLING ==========

// 404 Not Found middleware
app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

// Global error handler
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    console.error("Error:", err.message);
    console.error("Stack:", err.stack);
    
    // In production, don't send stack traces to client
    if (process.env.NODE_ENV === 'production') {
        res.status(statusCode).render("error", { 
            err: { 
                statusCode, 
                message: message 
            } 
        });
    } else {
        // In development, send full error details
        res.status(statusCode).render("error", { 
            err: { 
                statusCode, 
                message: message,
                stack: err.stack 
            } 
        });
    }
});

// ========== START SERVER ==========
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
    console.log(`🌐 Visit: http://localhost:${PORT}`);
    console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`);
});













// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const Listing = require("./models/listing.js");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
// const ExpressError = require("./utils/ExpressError.js");
// const { listingSchema } = require("./schema.js");


// app.engine("ejs", ejsMate);

// app.set("views", path.join(__dirname,"views"));
// app.set("view engine", "ejs");

// app.use(express.static(path.join(__dirname,"public")));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));


// const mangoUrl = "mongodb://127.0.0.1:27017/wanderlust";

// main().then((res) => {
//     console.log("successfully connected");
// }).catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(mangoUrl);
// }

// // to list entities
// // app.get("/testListing", async (req,res) => {
// //     let sampleListing = new Listing({
// //         title: "My New Home",
// //         description: "2BHK Flat",
// //         image: "https://images.unsplash.com/photo-1722421492323-eaf9c401befe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MkJIS3xlbnwwfHwwfHx8MA%3D%3D",
// //         price: "1000",
// //         location: "Delhi",
// //         country: "India"
// //     });
// //     await sampleListing.save();
// //     console.log("sample was saved");
// //     res.send("successfull");
// // });

// app.get("/", (req,res) => {
//     res.send(`Hy i am root`);
// });


// function validateListing(req, res, next){
//     let { error } = listingSchema.validate(req.body);
//     if (error){
//         let  errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, errMsg);
//     }else {
//         next();
//     }
// }

// app.post("/check", async (req, res, next) => {
//     console.log(req.body);
// })

// // to show all listing
// app.get("/listings", 
//     wrapAsync(async (req,res) => {
//         const allListings = await Listing.find();
//         res.render("listings/index", {allListings} );
// }));

// // to add new listing 
// app.get("/listings/new", (req,res) => {
//     res.render("listings/new");
// });

// // Create Route: to store new listing data in database
// app.post("/listings", 
//     validateListing,
//     wrapAsync(async (req, res, next) => {
//         const newListing = new Listing(req.body.listing);
//         await newListing.save();
//         res.redirect("/listings");
// }));

// // to edit listing
// app.get("/listings/:id/edit", 
//     wrapAsync(async (req,res) => {
//         let { id } = req.params;
//         let listing = await Listing.findById(id);
//         res.render("listings/edit", { listing });
// }));
// //  to save edited data
// app.put("/listings/:id", 
//     validateListing,
//     wrapAsync(async (req,res) => {
//         let { id } = req.params;
//         await Listing.findByIdAndUpdate(id,{ ...req.body.listing  }, { validator: true, new: true});
//         res.redirect(`/listings/${id}`);
// }));

// // to delete lsiting
// app.delete("/listings/:id", 
//     wrapAsync(async (req,res) => {
//         let { id } = req.params;
//         await Listing.findByIdAndDelete(id);
//         res.redirect("/listings");
// }));

// //  to show a particular listing info
// app.get("/listings/:id", 
//     wrapAsync(async (req,res) => {
//         let { id } = req.params;
//         const listing = await Listing.findById(id);
//         res.render("listings/show", { listing })
// }));

// // app.use((req, res, next) => {
// //     next(new ExpressError(404, "page not found!"));
// // });

// // Error handler 
// app.use((err, req, res, next) => {
//     let { statusCode = 500, message = "something went wrong"} = err;
//     console.log(err);
//     res.render("error.ejs", { err  });
// });

// const port = 8080;

// app.listen(port, () => {
//     console.log(`sever is running on port ${port}`);
// });