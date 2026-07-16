const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");


app.engine("ejs", ejsMate);

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

const sessionOptions = {
    secret: "myspecialsecret",
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true 
    }
};



const mangoUrl = "mongodb://127.0.0.1:27017/wanderlust";

main().then((res) => {
    console.log("successfully connected");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(mangoUrl);
};

app.get("/", (req,res) => {
    res.send(`Hy i am root`);
});

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
    next();
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);


app.get("/demouser", async (req, res) => {
    let fakeUser = new User({
        email: "student@gmail.com",
        username: "itsbuntyy"
    });
    let registeredUser = await User.register(fakeUser, "mypassward");
    res.send(registeredUser);
})

// Error handler 
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong"} = err;
    console.log(err);
    res.render("error.ejs", { err  });
});

app.listen(8080, () => {
    console.log(`sever is running on port 8080`);
});