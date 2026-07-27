const sampleListing = [
  {
    title: "Modern Beachfront Villa",
    description: "Luxury beachfront villa with private pool and ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      filename: "listingimage"
    },
    price: 8500,
    location: "Malibu",
    country: "USA",
    type: "villa",
    category: "beachfront",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Cozy Mountain Cabin",
    description: "Wooden cabin surrounded by mountains and forests.",
    image: {
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
      filename: "listingimage"
    },
    price: 4500,
    location: "Aspen",
    country: "USA",
    type: "house",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911]
    }
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Premium penthouse with skyline views and rooftop access.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      filename: "listingimage"
    },
    price: 12000,
    location: "New York",
    country: "USA",
    type: "hotel",
    category: "luxury",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128]
    }
  },
  {
    title: "Tropical Island Bungalow",
    description: "Beautiful overwater bungalow in a tropical paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      filename: "listingimage"
    },
    price: 15000,
    location: "Bora Bora",
    country: "French Polynesia",
    type: "villa",
    category: "beachfront",
    geometry: {
      type: "Point",
      coordinates: [-151.7415, -16.5004]
    }
  },
  {
    title: "Rustic Farmhouse Estate",
    description: "Traditional farmhouse with modern comforts.",
    image: {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
      filename: "listingimage"
    },
    price: 6000,
    location: "Tuscany",
    country: "Italy",
    type: "house",
    category: "luxury",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7710]
    }
  },
  {
    title: "Downtown Loft Apartment",
    description: "Modern loft in the heart of the city.",
    image: {
      url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09",
      filename: "listingimage"
    },
    price: 5000,
    location: "Chicago",
    country: "USA",
    type: "apartment",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [-87.6298, 41.8781]
    }
  },
  {
    title: "Seaside Cottage",
    description: "Peaceful cottage steps away from the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      filename: "listingimage"
    },
    price: 4000,
    location: "Cornwall",
    country: "UK",
    type: "house",
    category: "beachfront",
    geometry: {
      type: "Point",
      coordinates: [-5.0510, 50.2660]
    }
  },
  {
    title: "Modern Glass House",
    description: "Architectural masterpiece with panoramic views.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "listingimage"
    },
    price: 18000,
    location: "Los Angeles",
    country: "USA",
    type: "house",
    category: "luxury",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522]
    }
  },
  {
    title: "Historic Townhouse",
    description: "Beautifully restored townhouse with classic charm.",
    image: {
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
      filename: "listingimage"
    },
    price: 8000,
    location: "London",
    country: "UK",
    type: "house",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [-0.1276, 51.5074]
    }
  },
  {
    title: "Minimalist Studio",
    description: "Compact and stylish studio apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      filename: "listingimage"
    },
    price: 3000,
    location: "Berlin",
    country: "Germany",
    type: "apartment",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [13.4050, 52.5200]
    }
  },
  {
    title: "Mediterranean Villa",
    description: "Luxury villa overlooking the Mediterranean Sea.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "listingimage"
    },
    price: 14000,
    location: "Santorini",
    country: "Greece",
    type: "villa",
    category: "luxury",
    geometry: {
      type: "Point",
      coordinates: [25.4317, 36.3932]
    }
  },
  {
    title: "Urban Garden Flat",
    description: "Private garden flat in a quiet neighborhood.",
    image: {
      url: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83",
      filename: "listingimage"
    },
    price: 4500,
    location: "Amsterdam",
    country: "Netherlands",
    type: "apartment",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [4.9041, 52.3676]
    }
  },
  {
    title: "Waterfront Condo",
    description: "Luxury condo with marina and ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7",
      filename: "listingimage"
    },
    price: 13000,
    location: "Miami",
    country: "USA",
    type: "hotel",
    category: "beachfront",
    geometry: {
      type: "Point",
      coordinates: [-80.1918, 25.7617]
    }
  },
  {
    title: "Countryside Estate",
    description: "Large estate with gardens and open countryside.",
    image: {
      url: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455",
      filename: "listingimage"
    },
    price: 22000,
    location: "Provence",
    country: "France",
    type: "villa",
    category: "luxury",
    geometry: {
      type: "Point",
      coordinates: [5.3698, 43.2965]
    }
  },
  {
    title: "Zen Garden House",
    description: "Japanese-inspired retreat with peaceful surroundings.",
    image: {
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      filename: "listingimage"
    },
    price: 7500,
    location: "Kyoto",
    country: "Japan",
    type: "house",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [135.7681, 35.0116]
    }
  }
];

module.exports = { data: sampleListing };