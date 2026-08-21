require("dotenv").config();

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;

async function main() {
    try {
        // Check if database URL exists
        if (!dbUrl) {
            throw new Error("ATLASDB_URL is not defined in .env file");
        }

        // Connect to MongoDB Atlas
        await mongoose.connect(dbUrl);
        console.log("Successfully connected to MongoDB Atlas");

        // Delete existing listings
        await Listing.deleteMany({});
        console.log("Old data deleted");

        // Add owner to every listing
        const listings = initData.data.map((obj) => ({
            ...obj,
            owner: "6a60c2cf71c9a4ac89b8466b"
        }));

        // Insert new listings
        await Listing.insertMany(listings);

        console.log("Data was initialized successfully");

        // Close database connection
        await mongoose.connection.close();
        console.log("Database connection closed");

    } catch (err) {
        console.error("Error:", err);
    }
}

main();