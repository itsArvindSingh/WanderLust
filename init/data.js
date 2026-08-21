const listings = [

    // =========================
    // GOA
    // =========================

    {
        title: "Goa Coastal Retreat",
        description: "Relaxing coastal stay surrounded by palm trees and the beautiful beaches of Goa.",
        image: {
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=960&q=80",
            filename: "goa-beach.jpg"
        },
        price: 6500,
        location: "Goa",
        country: "IN",
        type: "villa",
        category: "beachfront",
        geometry: {
            type: "Point",
            coordinates: [73.8567, 15.2993]
        }
    },

    {
        title: "Goa Sunset Beach House",
        description: "Peaceful beachside accommodation offering beautiful sunset views and easy access to Goa's coastline.",
        image: {
            url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=960&q=80",
            filename: "goa-sunset.jpg"
        },
        price: 5800,
        location: "Goa",
        country: "IN",
        type: "house",
        category: "beachfront",
        geometry: {
            type: "Point",
            coordinates: [73.8567, 15.2993]
        }
    },

    {
        title: "Goa Tropical Villa",
        description: "Beautiful tropical villa surrounded by palm trees and a relaxing coastal atmosphere.",
        image: {
            url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=960&q=80",
            filename: "goa-tropical.jpg"
        },
        price: 6200,
        location: "Goa",
        country: "IN",
        type: "villa",
        category: "beachfront",
        geometry: {
            type: "Point",
            coordinates: [73.8567, 15.2993]
        }
    },


    // =========================
    // MANALI
    // =========================

    {
        title: "Manali Mountain Escape",
        description: "Cozy mountain accommodation surrounded by the Himalayan landscape and green valleys.",
        image: {
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=960&q=80",
            filename: "manali-mountains.jpg"
        },
        price: 4800,
        location: "Manali",
        country: "IN",
        type: "cabin",
        category: "mountains",
        geometry: {
            type: "Point",
            coordinates: [77.1892, 32.2396]
        }
    },

    {
        title: "Manali Himalayan Cottage",
        description: "Traditional mountain cottage offering peaceful surroundings and beautiful Himalayan scenery.",
        image: {
            url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=960&q=80",
            filename: "manali-snow.jpg"
        },
        price: 5200,
        location: "Manali",
        country: "IN",
        type: "cottage",
        category: "mountains",
        geometry: {
            type: "Point",
            coordinates: [77.1892, 32.2396]
        }
    },

    {
        title: "Manali Valley Retreat",
        description: "Quiet retreat surrounded by mountain scenery, ideal for a peaceful Himalayan getaway.",
        image: {
            url: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=960&q=80",
            filename: "manali-valley.jpg"
        },
        price: 4500,
        location: "Manali",
        country: "IN",
        type: "cabin",
        category: "cabins",
        geometry: {
            type: "Point",
            coordinates: [77.1892, 32.2396]
        }
    },


    // =========================
    // MUNNAR
    // =========================

    {
        title: "Munnar Tea Garden Cottage",
        description: "Peaceful cottage surrounded by the famous green tea plantations of Munnar.",
        image: {
            url: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=960&q=80",
            filename: "munnar-tea.jpg"
        },
        price: 4500,
        location: "Munnar",
        country: "IN",
        type: "cottage",
        category: "mountains",
        geometry: {
            type: "Point",
            coordinates: [77.0595, 10.0889]
        }
    },

    {
        title: "Munnar Hillside Retreat",
        description: "Comfortable hillside stay overlooking the misty Western Ghats and lush tea estates.",
        image: {
            url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=960&q=80",
            filename: "munnar-hills.jpg"
        },
        price: 5200,
        location: "Munnar",
        country: "IN",
        type: "villa",
        category: "mountains",
        geometry: {
            type: "Point",
            coordinates: [77.0595, 10.0889]
        }
    },

    {
        title: "Munnar Green Valley Stay",
        description: "Relaxing accommodation surrounded by lush green hills and plantations.",
        image: {
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=960&q=80",
            filename: "munnar-greenery.jpg"
        },
        price: 4800,
        location: "Munnar",
        country: "IN",
        type: "cottage",
        category: "cabins",
        geometry: {
            type: "Point",
            coordinates: [77.0595, 10.0889]
        }
    },


    // =========================
    // JAIPUR
    // =========================

    {
        title: "Jaipur Pink City Stay",
        description: "Heritage-inspired accommodation located in the heart of Jaipur near the historic Pink City.",
        image: {
            url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=960&q=80",
            filename: "jaipur-palace.jpg"
        },
        price: 4200,
        location: "Jaipur",
        country: "IN",
        type: "house",
        category: "iconic-cities",
        geometry: {
            type: "Point",
            coordinates: [75.7873, 26.9124]
        }
    },

    {
        title: "Jaipur Heritage Gateway",
        description: "Traditional Jaipur accommodation surrounded by historic architecture and colorful city streets.",
        image: {
            url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=960&q=80",
            filename: "jaipur-heritage.jpg"
        },
        price: 4600,
        location: "Jaipur",
        country: "IN",
        type: "hotel",
        category: "iconic-cities",
        geometry: {
            type: "Point",
            coordinates: [75.7873, 26.9124]
        }
    },

    {
        title: "Jaipur City Palace Retreat",
        description: "Elegant heritage stay inspired by Jaipur's royal architecture and historic City Palace.",
        image: {
            url: "https://images.unsplash.com/photo-1592639296346-560c37a0f711?auto=format&fit=crop&w=960&q=80",
            filename: "jaipur-city-palace.jpg"
        },
        price: 6500,
        location: "Jaipur",
        country: "IN",
        type: "hotel",
        category: "luxury",
        geometry: {
            type: "Point",
            coordinates: [75.7873, 26.9124]
        }
    },

    {
        title: "Jaipur Jal Mahal View",
        description: "Beautiful city accommodation inspired by Jaipur's famous lakeside architecture.",
        image: {
            url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=960&q=80",
            filename: "jaipur-lake-palace.jpg"
        },
        price: 5800,
        location: "Jaipur",
        country: "IN",
        type: "apartment",
        category: "iconic-cities",
        geometry: {
            type: "Point",
            coordinates: [75.7873, 26.9124]
        }
    },


    // =========================
    // RISHIKESH
    // =========================

    {
        title: "Rishikesh Riverside Retreat",
        description: "Peaceful stay near the Ganges surrounded by Himalayan foothills and lush greenery.",
        image: {
            url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=960&q=80",
            filename: "rishikesh-river.jpg"
        },
        price: 4200,
        location: "Rishikesh",
        country: "IN",
        type: "cottage",
        category: "trending",
        geometry: {
            type: "Point",
            coordinates: [78.2676, 30.0869]
        }
    },

    {
        title: "Rishikesh Ganga View House",
        description: "Comfortable accommodation with views toward the sacred Ganges and surrounding Himalayan landscape.",
        image: {
            url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=960&q=80",
            filename: "rishikesh-india.jpg"
        },
        price: 4500,
        location: "Rishikesh",
        country: "IN",
        type: "house",
        category: "trending",
        geometry: {
            type: "Point",
            coordinates: [78.2676, 30.0869]
        }
    },

    {
        title: "Rishikesh Mountain Camp",
        description: "Nature-focused accommodation surrounded by hills and river landscapes.",
        image: {
            url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=960&q=80",
            filename: "rishikesh-nature.jpg"
        },
        price: 3500,
        location: "Rishikesh",
        country: "IN",
        type: "cottage",
        category: "camping",
        geometry: {
            type: "Point",
            coordinates: [78.2676, 30.0869]
        }
    },


    // =========================
    // AULI
    // =========================

    {
        title: "Auli Himalayan Cabin",
        description: "Mountain cabin surrounded by the snow-covered Himalayan landscape of Auli.",
        image: {
            url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=960&q=80",
            filename: "auli-snow.jpg"
        },
        price: 6500,
        location: "Auli",
        country: "IN",
        type: "cabin",
        category: "mountains",
        geometry: {
            type: "Point",
            coordinates: [79.6037, 30.5286]
        }
    },


    // =========================
    // COORG
    // =========================

    {
        title: "Coorg Coffee Estate Stay",
        description: "Relaxing stay surrounded by lush coffee plantations and forests.",
        image: {
            url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=960&q=80",
            filename: "coorg-forest.jpg"
        },
        price: 5200,
        location: "Coorg",
        country: "IN",
        type: "villa",
        category: "cabins",
        geometry: {
            type: "Point",
            coordinates: [75.8069, 12.3375]
        }
    },

    {
        title: "Coorg Misty Plantation Cottage",
        description: "Quiet cottage surrounded by green landscapes and coffee-growing regions.",
        image: {
            url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=960&q=80",
            filename: "coorg-greenery.jpg"
        },
        price: 4800,
        location: "Coorg",
        country: "IN",
        type: "cottage",
        category: "cabins",
        geometry: {
            type: "Point",
            coordinates: [75.8069, 12.3375]
        }
    },


    // =========================
    // UDAIPUR
    // =========================

    {
        title: "Udaipur Lake City Retreat",
        description: "Heritage-inspired accommodation surrounded by the lakes and historic architecture of Udaipur.",
        image: {
            url: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=960&q=80",
            filename: "udaipur-lake.jpg"
        },
        price: 6200,
        location: "Udaipur",
        country: "IN",
        type: "hotel",
        category: "luxury",
        geometry: {
            type: "Point",
            coordinates: [73.7125, 24.5854]
        }
    },

    {
        title: "Udaipur Palace View Stay",
        description: "Elegant stay inspired by the royal heritage and palace architecture of Udaipur.",
        image: {
            url: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=960&q=80",
            filename: "udaipur-palace.jpg"
        },
        price: 7500,
        location: "Udaipur",
        country: "IN",
        type: "hotel",
        category: "luxury",
        geometry: {
            type: "Point",
            coordinates: [73.7125, 24.5854]
        }
    },

    {
        title: "Udaipur Heritage House",
        description: "Peaceful heritage accommodation with views of Udaipur's historic city and surrounding hills.",
        image: {
            url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=960&q=80",
            filename: "udaipur-heritage.jpg"
        },
        price: 5200,
        location: "Udaipur",
        country: "IN",
        type: "house",
        category: "iconic-cities",
        geometry: {
            type: "Point",
            coordinates: [73.7125, 24.5854]
        }
    },


    // =========================
    // JAISALMER
    // =========================

    {
        title: "Jaisalmer Desert Heritage Stay",
        description: "Traditional desert accommodation inspired by the golden architecture of Jaisalmer.",
        image: {
            url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=960&q=80",
            filename: "jaisalmer-desert.jpg"
        },
        price: 4200,
        location: "Jaisalmer",
        country: "IN",
        type: "bungalow",
        category: "camping",
        geometry: {
            type: "Point",
            coordinates: [70.6790, 26.9157]
        }
    },

    {
        title: "Jaisalmer Fort View Retreat",
        description: "Heritage accommodation overlooking the magnificent golden fort of Jaisalmer.",
        image: {
            url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=960&q=80",
            filename: "jaisalmer-fort.jpg"
        },
        price: 5500,
        location: "Jaisalmer",
        country: "IN",
        type: "hotel",
        category: "iconic-cities",
        geometry: {
            type: "Point",
            coordinates: [70.6790, 26.9157]
        }
    },


    // =========================
    // PUDUCHERRY
    // =========================

    {
        title: "Puducherry French Quarter House",
        description: "Charming accommodation near the historic French Quarter and beachfront streets of Puducherry.",
        image: {
            url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=960&q=80",
            filename: "puducherry.jpg"
        },
        price: 4800,
        location: "Puducherry",
        country: "IN",
        type: "house",
        category: "iconic-cities",
        geometry: {
            type: "Point",
            coordinates: [79.8083, 11.9416]
        }
    },

    {
        title: "Puducherry Beach Retreat",
        description: "Relaxing coastal stay close to the famous promenade and beaches of Puducherry.",
        image: {
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=960&q=80",
            filename: "puducherry-beach.jpg"
        },
        price: 4500,
        location: "Puducherry",
        country: "IN",
        type: "apartment",
        category: "beachfront",
        geometry: {
            type: "Point",
            coordinates: [79.8083, 11.9416]
        }
    },


    // =========================
    // VARANASI
    // =========================

    {
        title: "Varanasi Ganga View House",
        description: "Traditional riverside accommodation near the historic ghats of the Ganges.",
        image: {
            url: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=960&q=80",
            filename: "varanasi-ghats.jpg"
        },
        price: 3500,
        location: "Varanasi",
        country: "IN",
        type: "house",
        category: "iconic-cities",
        geometry: {
            type: "Point",
            coordinates: [83.0107, 25.3176]
        }
    },

    {
        title: "Varanasi Riverside Retreat",
        description: "Simple heritage stay overlooking the Ganges and historic riverfront.",
        image: {
            url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=960&q=80",
            filename: "varanasi-riverside.jpg"
        },
        price: 3800,
        location: "Varanasi",
        country: "IN",
        type: "hotel",
        category: "rooms",
        geometry: {
            type: "Point",
            coordinates: [83.0107, 25.3176]
        }
    },

    {
        title: "Varanasi Heritage Stay",
        description: "Cultural stay near ancient ghats, temples, and vibrant streets of Varanasi.",
        image: {
            url: "https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=960&q=80",
            filename: "varanasi-heritage.jpg"
        },
        price: 3200,
        location: "Varanasi",
        country: "IN",
        type: "house",
        category: "iconic-cities",
        geometry: {
            type: "Point",
            coordinates: [83.0107, 25.3176]
        }
    },


    // =========================
    // HAVELOCK ISLAND
    // =========================

    {
        title: "Havelock Island Beach Retreat",
        description: "Tropical island accommodation surrounded by pristine beaches and forests.",
        image: {
            url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=960&q=80",
            filename: "havelock-island.jpg"
        },
        price: 7500,
        location: "Havelock Island",
        country: "IN",
        type: "villa",
        category: "beachfront",
        geometry: {
            type: "Point",
            coordinates: [92.9854, 11.9768]
        }
    },


    // =========================
    // ALIBAUG
    // =========================

    {
        title: "Alibaug Beach House",
        description: "Relaxing coastal house surrounded by palm trees and peaceful beaches.",
        image: {
            url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=960&q=80",
            filename: "alibaug-beach.jpg"
        },
        price: 6500,
        location: "Alibaug",
        country: "IN",
        type: "house",
        category: "beachfront",
        geometry: {
            type: "Point",
            coordinates: [72.8720, 18.6414]
        }
    },


    // =========================
    // MUMBAI
    // =========================

    {
        title: "Mumbai Skyline Apartment",
        description: "Modern city accommodation with views of Mumbai's famous high-rise skyline.",
        image: {
            url: "https://images.unsplash.com/photo-1529253355930-5c6b1d9d6c44?auto=format&fit=crop&w=960&q=80",
            filename: "mumbai-skyline.jpg"
        },
        price: 8500,
        location: "Mumbai",
        country: "IN",
        type: "apartment",
        category: "iconic-cities",
        geometry: {
            type: "Point",
            coordinates: [72.8777, 19.0760]
        }
    },

    {
        title: "Mumbai Night Skyline Stay",
        description: "Stylish urban apartment surrounded by the bright cityscape of Mumbai.",
        image: {
            url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=960&q=80",
            filename: "mumbai-city.jpg"
        },
        price: 9000,
        location: "Mumbai",
        country: "IN",
        type: "apartment",
        category: "trending",
        geometry: {
            type: "Point",
            coordinates: [72.8777, 19.0760]
        }
    },


    // =========================
    // KOLKATA
    // =========================

    {
        title: "Kolkata Heritage Stay",
        description: "Heritage accommodation inspired by the historic architecture and cultural character of Kolkata.",
        image: {
            url: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=960&q=80",
            filename: "kolkata-heritage.jpg"
        },
        price: 4200,
        location: "Kolkata",
        country: "IN",
        type: "hotel",
        category: "iconic-cities",
        geometry: {
            type: "Point",
            coordinates: [88.3639, 22.5726]
        }
    }

];

module.exports = { data: listings };