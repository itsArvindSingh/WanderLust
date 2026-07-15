const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");


app.engine("ejs", ejsMate);

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

const mangoUrl = "mongodb://127.0.0.1:27017/wanderlust";

main().then((res) => {
    console.log("successfully connected");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(mangoUrl);
}

app.get("/", (req,res) => {
    res.send(`Hy i am root`);
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

// Error handler 
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong"} = err;
    console.log(err);
    res.render("error.ejs", { err  });
});

app.listen(8080, () => {
    console.log(`sever is running on port 8080`);
});