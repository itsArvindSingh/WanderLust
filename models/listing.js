const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1782848796343-4b5472b802f4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8 ",
        set: (v) => v === "" ?
        "https://images.unsplash.com/photo-1782848796343-4b5472b802f4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" :
         v,
    },
    price: Number,
    location: String,
    country: String,
    type: String,
    reviews:[
        {
        type: Schema.Types.ObjectId,
        ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){    
        await Review.deleteMany({reviews: {$in: listing.reviews}});
    }
}); 

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;