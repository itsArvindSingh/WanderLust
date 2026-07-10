const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mangoUrl = "mongodb://127.0.0.1:27017/wanderlust";

main().then((res) => {
    console.log("successfully connected");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(mangoUrl);
}


const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log(`data was initialised`);
}

initDB();