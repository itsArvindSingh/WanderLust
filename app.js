const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");



app.engine("ejs", ejsMate);

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

const sessionOptions = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};



// const mangoUrl = "mongodb://127.0.0.1:27017/wanderlust";

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize()); 
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());     // Add these
passport.deserializeUser(User.deserializeUser()); // two lines



app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    res.locals.warning = req.flash('warning');
    res.locals.info = req.flash('info');
    res.locals.messages = req.flash();
    next();
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

app.get("/", (req, res) => {
    res.redirect("/listings");
});

app.use((req, res, next) => {
    console.log("404 handler triggered for:", req.originalUrl); // Debug log
    next(new ExpressError(404, "Page Not Found!"));
});

// ERROR HANDLER - MUST COME LAST
app.use((err, req, res, next) => {
    console.log("Error handler triggered for:", req.originalUrl);
    let { statusCode = 500, message = "something went wrong" } = err;
    console.error("Error:", err);
    res.status(statusCode).render("error.ejs", { 
        err: { statusCode, message } 
    });
});

const dbUrl = process.env.ATLASDB_URL;

async function main() {
    try {
        await mongoose.connect(dbUrl);
        console.log("Successfully connected to MongoDB");

        const PORT = process.env.PORT || 8080;

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server is listening on port ${PORT}`);
        });

    } catch (err) {
        console.error("MongoDB connection failed:");
        console.error(err);
        process.exit(1);
    }
}

main();