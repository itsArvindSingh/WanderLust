const mongoose = require("mongoose");

const sampleListing = [
    {
        title: "Modern Beachfront Villa",
        description: "Stunning 4-bedroom villa with panoramic ocean views, private pool, and direct beach access. Perfect for luxury vacations.",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&auto=format&fit=crop&q=60",
        price: 8500,
        location: "Malibu",
        country: "USA",
        type: "villa"
    },
    {
        title: "Cozy Mountain Cabin",
        description: "Charming wooden cabin nestled in the mountains with fireplace, hot tub, and breathtaking valley views.",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&auto=format&fit=crop&q=60",
        price: 4500,
        location: "Aspen",
        country: "USA",
        type: "house"
    },
    {
        title: "Luxury Penthouse Suite",
        description: "Elegant penthouse in the heart of the city with floor-to-ceiling windows, modern amenities, and rooftop terrace.",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&auto=format&fit=crop&q=60",
        price: 12000,
        location: "New York",
        country: "USA",
        type: "hotel"
    },
    {
        title: "Tropical Island Bungalow",
        description: "Overwater bungalow with glass floor panels, private deck, and stunning sunset views over crystal clear waters.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&auto=format&fit=crop&q=60",
        price: 15000,
        location: "Bora Bora",
        country: "French Polynesia",
        type: "villa"
    },
    {
        title: "Rustic Farmhouse Estate",
        description: "Historic farmhouse on 10 acres of land with barn, gardens, and modern renovations preserving original charm.",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&auto=format&fit=crop&q=60",
        price: 6000,
        location: "Tuscany",
        country: "Italy",
        type: "house"
    },
    {
        title: "Downtown Loft Apartment",
        description: "Spacious industrial loft with exposed brick walls, high ceilings, and walking distance to all attractions.",
        image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=900&auto=format&fit=crop&q=60",
        price: 5000,
        location: "Chicago",
        country: "USA",
        type: "house"
    },
    {
        title: "Seaside Cottage Retreat",
        description: "Quaint cottage just steps from the beach with white picket fence, garden, and ocean breeze.",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&auto=format&fit=crop&q=60",
        price: 4000,
        location: "Cornwall",
        country: "UK",
        type: "house"
    },
    {
        title: "Modern Glass House",
        description: "Architectural masterpiece with floor-to-ceiling glass walls, blending seamlessly with surrounding nature.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&auto=format&fit=crop&q=60",
        price: 18000,
        location: "Los Angeles",
        country: "USA",
        type: "house"
    },
    {
        title: "Historic Townhouse",
        description: "Beautifully restored 19th-century townhouse with original details, courtyard garden, and modern kitchen.",
        image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&auto=format&fit=crop&q=60",
        price: 8000,
        location: "London",
        country: "UK",
        type: "house"
    },
    {
        title: "Minimalist Studio Apartment",
        description: "Tastefully designed studio with smart storage solutions, balcony, and city views.",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&auto=format&fit=crop&q=60",
        price: 3000,
        location: "Berlin",
        country: "Germany",
        type: "hotel"
    },
    {
        title: "Mediterranean Villa",
        description: "White-washed villa with terracotta roof, infinity pool, and olive groves overlooking the sea.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=60",
        price: 14000,
        location: "Santorini",
        country: "Greece",
        type: "villa"
    },
    {
        title: "Urban Garden Flat",
        description: "Private garden flat with patio, plants, and quiet location in the heart of the city.",
        image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&auto=format&fit=crop&q=60",
        price: 4500,
        location: "Amsterdam",
        country: "Netherlands",
        type: "house"
    },
    {
        title: "Luxury Waterfront Condo",
        description: "High-end condo with marina views, gym, pool, and private boat dock.",
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=900&auto=format&fit=crop&q=60",
        price: 13000,
        location: "Miami",
        country: "USA",
        type: "hotel"
    },
    {
        title: "Countryside Estate",
        description: "Grand estate with 15 rooms, tennis court, stables, and rolling hills as far as the eye can see.",
        image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=900&auto=format&fit=crop&q=60",
        price: 22000,
        location: "Provence",
        country: "France",
        type: "villa"
    },
    {
        title: "Zen Garden House",
        description: "Japanese-inspired house with meditation room, koi pond, and traditional rock garden.",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&auto=format&fit=crop&q=60",
        price: 7500,
        location: "Kyoto",
        country: "Japan",
        type: "house"
    },
    {
        title: "Beachfront Condominium",
        description: "Direct oceanfront condo with balcony, resort amenities, and stunning sunrise views.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60",
        price: 9500,
        location: "Gold Coast",
        country: "Australia",
        type: "hotel"
    },
    {
        title: "Eco-Friendly Cabin",
        description: "Sustainable off-grid cabin with solar power, rainwater harvesting, and organic garden.",
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=900&auto=format&fit=crop&q=60",
        price: 5500,
        location: "Costa Rica",
        country: "Costa Rica",
        type: "house"
    },
    {
        title: "Palace Suite",
        description: "Opulent palace suite with chandeliers, antique furniture, and royal garden views.",
        image: "https://images.unsplash.com/photo-1512757776214-26d36777b513?w=900&auto=format&fit=crop&q=60",
        price: 25000,
        location: "Dubai",
        country: "UAE",
        type: "hotel"
    },
    {
        title: "Desert Oasis Villa",
        description: "Luxury villa in the desert with infinity pool, palm gardens, and stunning sunset views over the dunes.",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&auto=format&fit=crop&q=60",
        price: 16000,
        location: "Scottsdale",
        country: "USA",
        type: "villa"
    },
    {
        title: "Cliffside Retreat",
        description: "Dramatic cliffside home with panoramic ocean views, glass infinity pool, and private beach access.",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&auto=format&fit=crop&q=60",
        price: 20000,
        location: "Amalfi Coast",
        country: "Italy",
        type: "villa"
    },
    {
        title: "Garden Villa",
        description: "Tropical garden villa with outdoor kitchen, swimming pool, and lush landscaping.",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&auto=format&fit=crop&q=60",
        price: 8500,
        location: "Bali",
        country: "Indonesia",
        type: "villa"
    },
    {
        title: "Urban Sky Loft",
        description: "Modern sky loft with floor-to-ceiling windows, designer furniture, and panoramic city views.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&auto=format&fit=crop&q=60",
        price: 11000,
        location: "Toronto",
        country: "Canada",
        type: "hotel"
    },
    {
        title: "Lakefront Cottage",
        description: "Charming lakefront cottage with private dock, fire pit, and breathtaking sunset views.",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&auto=format&fit=crop&q=60",
        price: 5000,
        location: "Lake Tahoe",
        country: "USA",
        type: "house"
    },
    {
        title: "Modern Treehouse",
        description: "Unique treehouse nestled in the forest canopy with eco-friendly design and stunning nature views.",
        image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=900&auto=format&fit=crop&q=60",
        price: 4800,
        location: "Portland",
        country: "USA",
        type: "house"
    },
    {
        title: "Beach House",
        description: "Classic beach house with wrap-around porch, outdoor shower, and steps to the ocean.",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&auto=format&fit=crop&q=60",
        price: 7000,
        location: "Santa Monica",
        country: "USA",
        type: "house"
    },
    {
        title: "Mountain Lodge",
        description: "Rustic mountain lodge with stone fireplace, game room, and breathtaking alpine views.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&auto=format&fit=crop&q=60",
        price: 10500,
        location: "Banff",
        country: "Canada",
        type: "villa"
    },
    {
        title: "Canal House",
        description: "Charming canal house with historic features, private garden, and water views.",
        image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&auto=format&fit=crop&q=60",
        price: 9500,
        location: "Amsterdam",
        country: "Netherlands",
        type: "house"
    },
    {
        title: "Jungle Villa",
        description: "Luxury villa hidden in the jungle with outdoor bathtub, infinity pool, and exotic wildlife.",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&auto=format&fit=crop&q=60",
        price: 13000,
        location: "Costa Rica",
        country: "Costa Rica",
        type: "villa"
    },
    {
        title: "City Center Flat",
        description: "Modern flat in the city center with balcony, elevator, and walking distance to all attractions.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=60",
        price: 4500,
        location: "Prague",
        country: "Czech Republic",
        type: "hotel"
    },
    {
        title: "Floating House",
        description: "Unique floating house with panoramic water views, rooftop deck, and sustainable design.",
        image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&auto=format&fit=crop&q=60",
        price: 8500,
        location: "Amsterdam",
        country: "Netherlands",
        type: "house"
    },
    {
        title: "Forest Cabin",
        description: "Secluded cabin in the forest with wood-burning stove, loft bedroom, and nature trails.",
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=900&auto=format&fit=crop&q=60",
        price: 3800,
        location: "Vermont",
        country: "USA",
        type: "house"
    },
    {
        title: "Luxury Villa",
        description: "Stunning luxury villa with 6 bedrooms, home theater, gym, and spectacular ocean views.",
        image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=900&auto=format&fit=crop&q=60",
        price: 28000,
        location: "Beverly Hills",
        country: "USA",
        type: "villa"
    },
    {
        title: "Heritage Home",
        description: "Beautiful heritage home with original architecture, modern upgrades, and established gardens.",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&auto=format&fit=crop&q=60",
        price: 7500,
        location: "Edinburgh",
        country: "UK",
        type: "house"
    },
    {
        title: "Tropical Beach Bungalow",
        description: "Colorful beach bungalow with hammocks, outdoor kitchen, and steps from the Caribbean sea.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60",
        price: 5500,
        location: "Jamaica",
        country: "Jamaica",
        type: "house"
    },
    {
        title: "Snowy Mountain Home",
        description: "Cozy mountain home with heated floors, fireplace, and stunning winter views of the peaks.",
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=900&auto=format&fit=crop&q=60",
        price: 6500,
        location: "Vail",
        country: "USA",
        type: "villa"
    },
    {
        title: "Riverside Apartment",
        description: "Modern riverside apartment with balcony, gym, and walking paths along the river.",
        image: "https://images.unsplash.com/photo-1512757776214-26d36777b513?w=900&auto=format&fit=crop&q=60",
        price: 5500,
        location: "Paris",
        country: "France",
        type: "hotel"
    }
];

module.exports = { data: sampleListing };