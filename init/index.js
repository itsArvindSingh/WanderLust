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
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6a60c2cf71c9a4ac89b8466b"
    }));
    await Listing.insertMany(initData.data);
    console.log(`data was initialised`);
}

initDB();