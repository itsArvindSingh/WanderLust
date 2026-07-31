const CATEGORIES = [
    { value: 'trending', label: 'Trending', icon: 'fa-solid fa-fire' },
    { value: 'rooms', label: 'Rooms', icon: 'fa-solid fa-bed' },
    { value: 'iconic-cities', label: 'Iconic Cities', icon: 'fa-solid fa-mountain-city' },
    { value: 'mountains', label: 'Mountains', icon: 'fa-solid fa-mountain' },
    { value: 'caves', label: 'Caves', icon: 'fa-solid fa-dungeon' },
    { value: 'luxury', label: 'Luxury', icon: 'fa-solid fa-house-chimney-window' },
    { value: 'castles', label: 'Castles', icon: 'fa-brands fa-fort-awesome' },
    { value: 'amazing-pools', label: 'Amazing Pools', icon: 'fa-solid fa-person-swimming' },
    { value: 'cabins', label: 'Cabins', icon: 'fa-solid fa-tree' },
    { value: 'beachfront', label: 'Beachfront', icon: 'fa-solid fa-umbrella-beach' },
    { value: 'camping', label: 'Camping', icon: 'fa-solid fa-campground' },
    { value: 'boats', label: 'Boats', icon: 'fa-solid fa-sailboat' }
];

const getCategories = () => CATEGORIES ;


const TYPES = [
    { value: 'villa', label: 'Villa', icon: 'fa-solid fa-building' },
    { value: 'house', label: 'House', icon: 'fa-solid fa-house' },
    { value: 'hotel', label: 'Hotel', icon: 'fa-solid fa-hotel' },
    { value: 'apartment', label: 'Apartment', icon: 'fa-solid fa-building' },
    { value: 'cottage', label: 'Cottage', icon: 'fa-solid fa-home' },
    { value: 'bungalow', label: 'Bungalow', icon: 'fa-solid fa-house-chimney' },
    { value: 'cabin', label: 'Cabin', icon: 'fa-solid fa-tree' },
    { value: 'castle', label: 'Castle', icon: 'fa-brands fa-fort-awesome' },
    { value: 'boat', label: 'Boat', icon: 'fa-solid fa-sailboat' }
];

const getTypes = () => TYPES;


module.exports = {
    getTypes,
    getCategories
}