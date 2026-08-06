const sampleListing = [
  {
    title: "Coastal Paradise Villa",
    description: "Luxurious beachfront villa with stunning ocean views, infinity pool, and direct access to pristine white sand beaches.",
    image: {
      url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
      filename: "listingimage"
    },
    price: 25000,
    location: "Goa",
    country: "IN",
    type: "villa",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [73.8567, 15.2993]
    }
  },
  {
    title: "Urban Skyline Penthouse",
    description: "Modern penthouse in the heart of the city with panoramic views, private terrace, and smart home features.",
    image: {
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
      filename: "listingimage"
    },
    price: 18000,
    location: "Mumbai",
    country: "IN",
    type: "apartment",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.0760]
    }
  },
  {
    title: "Mountain Retreat Lodge",
    description: "Cozy lodge nestled in the Himalayas with breathtaking mountain views, fireplace, and outdoor hot tub.",
    image: {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      filename: "listingimage"
    },
    price: 15000,
    location: "Manali",
    country: "IN",
    type: "cottage",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [77.1767, 32.2396]
    }
  },
  {
    title: "Tropical Island Bungalow",
    description: "Charming bungalow surrounded by lush tropical gardens, just steps away from crystal clear waters.",
    image: {
      url: "https://images.unsplash.com/photo-1566671461876-1ea9eb2e5fbb",
      filename: "listingimage"
    },
    price: 12000,
    location: "Kerala",
    country: "IN",
    type: "bungalow",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [76.2673, 9.9312]
    }
  },
  {
    title: "Desert Oasis Estate",
    description: "Spectacular desert estate with private pool, traditional architecture, and stunning sunset views over the dunes.",
    image: {
      url: "https://images.unsplash.com/photo-1497734862699-4cd6a7b68433",
      filename: "listingimage"
    },
    price: 22000,
    location: "Rajasthan",
    country: "IN",
    type: "villa",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [73.8567, 26.9124]
    }
  },
  {
    title: "Art Deco Heritage Room",
    description: "Elegant heritage room in a restored art deco building with period furniture and modern amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      filename: "listingimage"
    },
    price: 8500,
    location: "Kolkata",
    country: "IN",
    type: "hotel",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [88.3639, 22.5726]
    }
  },
  {
    title: "Cozy Studio with City Views",
    description: "Bright and airy studio apartment with floor-to-ceiling windows offering spectacular city views.",
    image: {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      filename: "listingimage"
    },
    price: 7500,
    location: "Delhi",
    country: "IN",
    type: "apartment",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [77.2090, 28.6139]
    }
  },
  {
    title: "Garden Room with Terrace",
    description: "Serene garden room with private terrace overlooking beautiful landscaped gardens and water features.",
    image: {
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      filename: "listingimage"
    },
    price: 6800,
    location: "Bangalore",
    country: "IN",
    type: "cottage",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    }
  },
  {
    title: "Poolside Suite",
    description: "Luxurious suite with direct pool access, private sun deck, and outdoor dining area.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      filename: "listingimage"
    },
    price: 9200,
    location: "Pune",
    country: "IN",
    type: "hotel",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [73.8567, 18.5204]
    }
  },
  {
    title: "Riverside Retreat Room",
    description: "Peaceful room overlooking a gentle river with private balcony and access to nature trails.",
    image: {
      url: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77",
      filename: "listingimage"
    },
    price: 5800,
    location: "Rishikesh",
    country: "IN",
    type: "cottage",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [78.2673, 30.0869]
    }
  },
  {
    title: "Historic Parisian Apartment",
    description: "Charming apartment in the heart of Paris with original features, wooden beams, and Eiffel Tower views.",
    image: {
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      filename: "listingimage"
    },
    price: 28000,
    location: "Paris",
    country: "FR",
    type: "apartment",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566]
    }
  },
  {
    title: "Venetian Canal Palace",
    description: "Magnificent palace overlooking the Grand Canal with ornate interiors and private water entrance.",
    image: {
      url: "https://images.unsplash.com/photo-1553705444-4dfb5e02a132",
      filename: "listingimage"
    },
    price: 35000,
    location: "Venice",
    country: "IT",
    type: "villa",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [12.3155, 45.4408]
    }
  },
  {
    title: "Tokyo Skyscraper Suite",
    description: "Futuristic suite on the 50th floor with panoramic views of Tokyo's neon-lit skyline and Mount Fuji.",
    image: {
      url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      filename: "listingimage"
    },
    price: 30000,
    location: "Tokyo",
    country: "JP",
    type: "apartment",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895]
    }
  },
  {
    title: "London Heritage Townhouse",
    description: "Elegant Georgian townhouse in fashionable neighborhood with period details and modern luxury.",
    image: {
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
      filename: "listingimage"
    },
    price: 32000,
    location: "London",
    country: "GB",
    type: "house",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [-0.1278, 51.5074]
    }
  },
  {
    title: "New York Loft with Skyline",
    description: "Industrial-chic loft in Manhattan with floor-to-ceiling windows showcasing the iconic NYC skyline.",
    image: {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      filename: "listingimage"
    },
    price: 34000,
    location: "New York",
    country: "US",
    type: "apartment",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128]
    }
  },
  {
    title: "Alpine Chalet with Glacier View",
    description: "Traditional Swiss chalet with panoramic views of the Alps, cozy fireplace, and outdoor sauna.",
    image: {
      url: "https://images.unsplash.com/photo-1520437358207-323b43b50729",
      filename: "listingimage"
    },
    price: 26000,
    location: "Zermatt",
    country: "CH",
    type: "cabin",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [7.7475, 46.0207]
    }
  },
  {
    title: "Rocky Mountain Lodge",
    description: "Rustic lodge surrounded by pine forests with spectacular mountain views, hiking trails, and wildlife.",
    image: {
      url: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a",
      filename: "listingimage"
    },
    price: 18000,
    location: "Aspen",
    country: "US",
    type: "cottage",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911]
    }
  },
  {
    title: "Himalayan Sanctuary",
    description: "Peaceful mountain sanctuary offering yoga, meditation, and breathtaking views of the Himalayan peaks.",
    image: {
      url: "https://images.unsplash.com/photo-1542401886-65d6c61db217",
      filename: "listingimage"
    },
    price: 14000,
    location: "Dharamshala",
    country: "IN",
    type: "villa",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [76.3185, 32.2190]
    }
  },
  {
    title: "Andean Mountain Retreat",
    description: "Authentic Andean retreat with stone architecture, mountain views, and access to ancient Incan trails.",
    image: {
      url: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3",
      filename: "listingimage"
    },
    price: 16000,
    location: "Cusco",
    country: "PE",
    type: "hotel",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-71.9722, -13.5320]
    }
  },
  {
    title: "Norwegian Fjord Cabin",
    description: "Scenic cabin perched on a fjord with views of crystal clear waters, waterfalls, and northern lights.",
    image: {
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      filename: "listingimage"
    },
    price: 20000,
    location: "Geiranger",
    country: "NO",
    type: "cabin",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [7.2070, 62.1015]
    }
  },
  {
    title: "Underground Cave Dwelling",
    description: "Unique cave dwelling carved into ancient rock with natural heating, skylights, and stunning views.",
    image: {
      url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0",
      filename: "listingimage"
    },
    price: 19000,
    location: "Cappadocia",
    country: "TR",
    type: "bungalow",
    category: "caves",
    geometry: {
      type: "Point",
      coordinates: [34.8469, 38.6400]
    }
  },
  {
    title: "Cave Pool Villa with Hot Spring",
    description: "Luxury cave villa with private hot spring pool, natural rock formations, and outdoor garden.",
    image: {
      url: "https://images.unsplash.com/photo-1531928351158-2f736078e0a1",
      filename: "listingimage"
    },
    price: 24000,
    location: "Pamukkale",
    country: "TR",
    type: "villa",
    category: "caves",
    geometry: {
      type: "Point",
      coordinates: [29.1074, 37.9165]
    }
  },
  {
    title: "Desert Cave Suite",
    description: "Spectacular cave suite in the desert with panoramic views, private terrace, and starlit skies.",
    image: {
      url: "https://images.unsplash.com/photo-1545837561-b3f1ef9b2f6f",
      filename: "listingimage"
    },
    price: 17000,
    location: "Arizona",
    country: "US",
    type: "hotel",
    category: "caves",
    geometry: {
      type: "Point",
      coordinates: [-111.0937, 36.9989]
    }
  },
  {
    title: "Cliffside Cave Home",
    description: "Ancient cave home with modern amenities, panoramic ocean views, and private access to the sea.",
    image: {
      url: "https://images.unsplash.com/photo-1542556398-9bd194365ab8",
      filename: "listingimage"
    },
    price: 21000,
    location: "Santorini",
    country: "GR",
    type: "house",
    category: "caves",
    geometry: {
      type: "Point",
      coordinates: [25.4167, 36.3932]
    }
  },
  {
    title: "Tropical Cave Bungalow",
    description: "Hidden cave bungalow surrounded by tropical jungle with waterfall pool and fireflies at night.",
    image: {
      url: "https://images.unsplash.com/photo-1536987333706-5a2d6ab0a88b",
      filename: "listingimage"
    },
    price: 15000,
    location: "Phuket",
    country: "TH",
    type: "bungalow",
    category: "caves",
    geometry: {
      type: "Point",
      coordinates: [98.3663, 7.8804]
    }
  },
  {
    title: "Maldives Overwater Villa",
    description: "Ultra-luxury overwater villa with glass floor panels, private infinity pool, and butler service.",
    image: {
      url: "https://images.unsplash.com/photo-1537420327992-d6e192287183",
      filename: "listingimage"
    },
    price: 45000,
    location: "Maldives",
    country: "MV",
    type: "villa",
    category: "luxury",
    geometry: {
      type: "Point",
      coordinates: [73.2207, 3.2028]
    }
  },
  {
    title: "Beverly Hills Mansion",
    description: "Stunning Beverly Hills mansion with celebrity-style amenities, infinity pool, and panoramic city views.",
    image: {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      filename: "listingimage"
    },
    price: 50000,
    location: "Los Angeles",
    country: "US",
    type: "villa",
    category: "luxury",
    geometry: {
      type: "Point",
      coordinates: [-118.4079, 34.0736]
    }
  },
  {
    title: "Monaco Seaside Palace",
    description: "Palatial seaside residence with private beach, helipad, and panoramic Mediterranean views.",
    image: {
      url: "https://images.unsplash.com/photo-1514829090809-35fe8ed14d2b",
      filename: "listingimage"
    },
    price: 55000,
    location: "Monaco",
    country: "MC",
    type: "villa",
    category: "luxury",
    geometry: {
      type: "Point",
      coordinates: [7.4246, 43.7384]
    }
  },
  {
    title: "Dubai Sky Mansion",
    description: "Spectacular sky mansion in Burj Khalifa with private pool, panoramic views, and luxury amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      filename: "listingimage"
    },
    price: 48000,
    location: "Dubai",
    country: "AE",
    type: "apartment",
    category: "luxury",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048]
    }
  },
  {
    title: "Lake Como Villa",
    description: "Exquisite historic villa on Lake Como with private gardens, pool, and stunning lake views.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      filename: "listingimage"
    },
    price: 40000,
    location: "Lake Como",
    country: "IT",
    type: "villa",
    category: "luxury",
    geometry: {
      type: "Point",
      coordinates: [9.2534, 45.9922]
    }
  },
  {
    title: "Scottish Highland Castle",
    description: "Authentic 12th-century castle with towers, drawbridge, and stunning views of the Scottish Highlands.",
    image: {
      url: "https://images.unsplash.com/photo-1505846951823-c22b63d4081d",
      filename: "listingimage"
    },
    price: 38000,
    location: "Highlands",
    country: "GB",
    type: "castle",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [-4.0583, 57.4366]
    }
  },
  {
    title: "French Loire Valley Chateau",
    description: "Magnificent Renaissance chateau surrounded by vineyards, gardens, and historic architecture.",
    image: {
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      filename: "listingimage"
    },
    price: 42000,
    location: "Loire Valley",
    country: "FR",
    type: "castle",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [0.2213, 47.2905]
    }
  },
  {
    title: "Neuschwanstein Castle Apartment",
    description: "Fairytale apartment inside Neuschwanstein Castle with stunning views and royal decor.",
    image: {
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
      filename: "listingimage"
    },
    price: 35000,
    location: "Bavaria",
    country: "DE",
    type: "castle",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [10.7550, 47.5576]
    }
  },
  {
    title: "Irish Castle Keep",
    description: "Historic castle keep with restored interiors, cozy fires, and beautiful countryside views.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      filename: "listingimage"
    },
    price: 30000,
    location: "County Kerry",
    country: "IE",
    type: "castle",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [-9.3416, 52.0209]
    }
  },
  {
    title: "Spanish Parador Castle",
    description: "Luxurious parador in a historic Spanish castle with ancient walls, courtyards, and modern comforts.",
    image: {
      url: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59",
      filename: "listingimage"
    },
    price: 32000,
    location: "Castile",
    country: "ES",
    type: "castle",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [-4.2870, 41.7215]
    }
  },
  {
    title: "Tropical Infinity Pool Villa",
    description: "Spectacular villa with massive infinity pool overlooking the ocean and lush tropical gardens.",
    image: {
      url: "https://images.unsplash.com/photo-1536525239170-6d5515af55f5",
      filename: "listingimage"
    },
    price: 28000,
    location: "Bali",
    country: "ID",
    type: "villa",
    category: "amazing-pools",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.3405]
    }
  },
  {
    title: "Desert Pool Oasis",
    description: "Private desert villa with stunning pool, outdoor day beds, and spectacular sunset views.",
    image: {
      url: "https://images.unsplash.com/photo-1559599237-2f1f556e4ec3",
      filename: "listingimage"
    },
    price: 23000,
    location: "Scottsdale",
    country: "US",
    type: "villa",
    category: "amazing-pools",
    geometry: {
      type: "Point",
      coordinates: [-111.9260, 33.4942]
    }
  },
  {
    title: "Cliffside Infinity Paradise",
    description: "Dramatic cliffside villa with infinity pool merging into the ocean, offering breathtaking sunset views.",
    image: {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      filename: "listingimage"
    },
    price: 31000,
    location: "Amalfi Coast",
    country: "IT",
    type: "villa",
    category: "amazing-pools",
    geometry: {
      type: "Point",
      coordinates: [14.6515, 40.6336]
    }
  },
  {
    title: "Jungle Treehouse with Pool",
    description: "Unique treehouse with private pool suspended in the jungle canopy, accessed by rope bridge.",
    image: {
      url: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      filename: "listingimage"
    },
    price: 20000,
    location: "Costa Rica",
    country: "CR",
    type: "bungalow",
    category: "amazing-pools",
    geometry: {
      type: "Point",
      coordinates: [-84.5088, 10.2136]
    }
  },
  {
    title: "Urban Rooftop Pool Penthouse",
    description: "Stunning penthouse with rooftop pool, panoramic city views, and modern luxury amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      filename: "listingimage"
    },
    price: 27000,
    location: "Bangkok",
    country: "TH",
    type: "apartment",
    category: "amazing-pools",
    geometry: {
      type: "Point",
      coordinates: [100.5018, 13.7563]
    }
  },
  {
    title: "Pacific Northwest Cabin",
    description: "Cozy modern cabin in the woods with floor-to-ceiling windows, hot tub, and mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c",
      filename: "listingimage"
    },
    price: 16000,
    location: "Washington",
    country: "US",
    type: "cabin",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [-121.8863, 47.6062]
    }
  },
  {
    title: "Forest Lake Cabin",
    description: "Secluded cabin by a pristine lake with private dock, canoe, and stunning forest views.",
    image: {
      url: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c",
      filename: "listingimage"
    },
    price: 14000,
    location: "Muskoka",
    country: "CA",
    type: "cabin",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [-79.5348, 45.0966]
    }
  },
  {
    title: "Snowy Mountain Cabin",
    description: "Charming winter cabin with fireplace, wood sauna, and easy access to ski slopes and trails.",
    image: {
      url: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59",
      filename: "listingimage"
    },
    price: 15000,
    location: "Whistler",
    country: "CA",
    type: "cabin",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [-122.9589, 50.1163]
    }
  },
  {
    title: "Redwood Forest Hideaway",
    description: "Peaceful cabin among ancient redwoods with outdoor shower, hot tub, and hiking trails.",
    image: {
      url: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69",
      filename: "listingimage"
    },
    price: 13000,
    location: "California",
    country: "US",
    type: "cabin",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [-124.0363, 41.3373]
    }
  },
  {
    title: "Swedish Forest Cabin",
    description: "Minimalist Scandinavian cabin with floor-to-ceiling windows, wood-burning stove, and starry nights.",
    image: {
      url: "https://images.unsplash.com/photo-1546975490-e8b92a360b24",
      filename: "listingimage"
    },
    price: 12000,
    location: "Sweden",
    country: "SE",
    type: "cabin",
    category: "cabins",
    geometry: {
      type: "Point",
      coordinates: [16.1296, 60.1282]
    }
  },
  {
    title: "Maldives Beach Bungalow",
    description: "Luxurious beach bungalow with direct access to white sand beaches, turquoise waters, and palm trees.",
    image: {
      url: "https://images.unsplash.com/photo-1537420327992-d6e192287183",
      filename: "listingimage"
    },
    price: 32000,
    location: "Maldives",
    country: "MV",
    type: "bungalow",
    category: "beachfront",
    geometry: {
      type: "Point",
      coordinates: [73.2207, 3.2028]
    }
  },
  {
    title: "Caribbean Beach Villa",
    description: "Stunning villa on the beach with private infinity pool, outdoor kitchen, and tropical gardens.",
    image: {
      url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
      filename: "listingimage"
    },
    price: 28000,
    location: "Barbados",
    country: "BB",
    type: "villa",
    category: "beachfront",
    geometry: {
      type: "Point",
      coordinates: [-59.5432, 13.1939]
    }
  },
  {
    title: "Australian Surf Beach House",
    description: "Modern beach house with panoramic ocean views, perfect for surfing, swimming, and relaxing.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      filename: "listingimage"
    },
    price: 22000,
    location: "Byron Bay",
    country: "AU",
    type: "house",
    category: "beachfront",
    geometry: {
      type: "Point",
      coordinates: [153.6128, -28.6487]
    }
  },
  {
    title: "Santorini Beach Cave House",
    description: "Unique cave house on the beach with traditional architecture, sunset views, and volcanic sand.",
    image: {
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
      filename: "listingimage"
    },
    price: 25000,
    location: "Santorini",
    country: "GR",
    type: "house",
    category: "beachfront",
    geometry: {
      type: "Point",
      coordinates: [25.4167, 36.3932]
    }
  },
  {
    title: "Thailand Beach Bungalow",
    description: "Charming beach bungalow with private garden, outdoor shower, and breathtaking sunset views.",
    image: {
      url: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5",
      filename: "listingimage"
    },
    price: 18000,
    location: "Phuket",
    country: "TH",
    type: "bungalow",
    category: "beachfront",
    geometry: {
      type: "Point",
      coordinates: [98.3663, 7.8804]
    }
  },
  {
    title: "Safari Luxury Camp",
    description: "Luxury safari camp with spacious tents, private deck, and incredible wildlife viewing opportunities.",
    image: {
      url: "https://images.unsplash.com/photo-1546039907-7fa05f864c02",
      filename: "listingimage"
    },
    price: 19000,
    location: "Masai Mara",
    country: "KE",
    type: "bungalow",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [34.9454, -1.4857]
    }
  },
  {
    title: "Glamping Dome with Views",
    description: "Eco-friendly glamping dome with panoramic mountain views, outdoor kitchen, and fire pit.",
    image: {
      url: "https://images.unsplash.com/photo-1563299796-17596ed6b017",
      filename: "listingimage"
    },
    price: 12000,
    location: "Utah",
    country: "US",
    type: "bungalow",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [-111.0937, 37.5331]
    }
  },
  {
    title: "Forest Camping Lodge",
    description: "Immersive forest camping experience with eco-lodge amenities, guided nature walks, and starlit skies.",
    image: {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
      filename: "listingimage"
    },
    price: 9500,
    location: "Yosemite",
    country: "US",
    type: "cottage",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [-119.5553, 37.8651]
    }
  },
  {
    title: "Beachfront Camping Villa",
    description: "Luxury camping villa on the beach with all amenities, private chef, and sunset yoga sessions.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "listingimage"
    },
    price: 16000,
    location: "Kerala",
    country: "IN",
    type: "villa",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [76.2673, 9.9312]
    }
  },
  {
    title: "Desert Stargazing Camp",
    description: "Unique desert camp with luxurious tents, stargazing telescopes, and traditional Bedouin hospitality.",
    image: {
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
      filename: "listingimage"
    },
    price: 13000,
    location: "Rajasthan",
    country: "IN",
    type: "bungalow",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [73.8567, 26.9124]
    }
  },
  {
    title: "Amsterdam Houseboat Suite",
    description: "Charming houseboat on the canals with modern decor, sunny deck, and picturesque city views.",
    image: {
      url: "https://images.unsplash.com/photo-1513279922550-250c2129b13a",
      filename: "listingimage"
    },
    price: 16000,
    location: "Amsterdam",
    country: "NL",
    type: "boat",
    category: "boats",
    geometry: {
      type: "Point",
      coordinates: [4.8952, 52.3702]
    }
  },
  {
    title: "Seattle Houseboat Home",
    description: "Unique houseboat with stunning waterfront views, modern interior, and easy access to the city.",
    image: {
      url: "https://images.unsplash.com/photo-1575496917055-f23c822796eb",
      filename: "listingimage"
    },
    price: 14000,
    location: "Seattle",
    country: "US",
    type: "boat",
    category: "boats",
    geometry: {
      type: "Point",
      coordinates: [-122.3352, 47.6062]
    }
  },
  {
    title: "Sydney Harbor Luxury Boat",
    description: "Luxurious moored boat in Sydney Harbor with panoramic views of the Opera House and Harbour Bridge.",
    image: {
      url: "https://images.unsplash.com/photo-1548574505-5e239809ee19",
      filename: "listingimage"
    },
    price: 20000,
    location: "Sydney",
    country: "AU",
    type: "boat",
    category: "boats",
    geometry: {
      type: "Point",
      coordinates: [151.2093, -33.8688]
    }
  },
  {
    title: "Venetian Canal Boat Hotel",
    description: "Romantic boat hotel on the Grand Canal with elegant interiors, private terrace, and gondola rides.",
    image: {
      url: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf",
      filename: "listingimage"
    },
    price: 22000,
    location: "Venice",
    country: "IT",
    type: "boat",
    category: "boats",
    geometry: {
      type: "Point",
      coordinates: [12.3155, 45.4408]
    }
  },
  {
    title: "Tropical Yacht Retreat",
    description: "Luxury yacht retreat with all amenities, perfect for exploring tropical islands and coral reefs.",
    image: {
      url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a",
      filename: "listingimage"
    },
    price: 26000,
    location: "Bahamas",
    country: "BS",
    type: "boat",
    category: "boats",
    geometry: {
      type: "Point",
      coordinates: [-78.0724, 25.0343]
    }
  }
];

module.exports = { data: sampleListing };