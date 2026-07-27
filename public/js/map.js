import * as maplibregl from 'https://unpkg.com/maplibre-gl@6.0.0/dist/maplibre-gl.mjs';

// Use saved coordinates or default to Abu Road
const coordinates = (typeof listingCoordinates !== 'undefined' && listingCoordinates.length) 
    ? listingCoordinates 
    : [72.7854, 24.4807];

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://tiles.openfreemap.org/styles/liberty',
    center: coordinates,
    zoom: 9,
    maplibreLogo: true
});

// 1. Create Airbnb-style Home Icon Element
const el = document.createElement('div');
el.className = 'airbnb-marker';
el.innerHTML = `
    <svg viewBox="0 0 32 32" width="18" height="18" fill="white" aria-hidden="true">
        <path d="M16 1L2 13h3v16h8V19h6v10h8V13h3L16 1z"/>
    </svg>
`;

// 2. Inject CSS for the Marker & Hover Animation
const style = document.createElement('style');
style.innerHTML = `
    .airbnb-marker {
        background-color: #FF385C; /* Official Airbnb Coral/Red */
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.2s ease;
        border: 2px solid #ffffff;
        user-select: none;
    }

    .airbnb-marker:hover {
        transform: scale(1.25);
        background-color: #E00B41;
        z-index: 1000;
    }
`;
document.head.appendChild(style);

// 3. Create Popup (hidden by default)
const popup = new maplibregl.Popup({
    offset: 25,
    closeButton: false,
    closeOnClick: false
}).setHTML(`
    <h3>${listingLocationName}</h3>
    <b>Exact location provided after booking!</b>`);

// 4. Attach custom element to MapLibre Marker
const marker = new maplibregl.Marker({ element: el })
    .setLngLat(coordinates)
    .addTo(map);
// 5. Hover listeners
el.addEventListener('mouseenter', () => {
    popup.setLngLat(coordinates).addTo(map);
});

el.addEventListener('mouseleave', () => {
    popup.remove();
});