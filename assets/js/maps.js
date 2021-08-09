
function initMap() {
const map = new google.maps.Map(document.getElementById("map"), {
zoom: 3,
center: { lat: 40.785091, lng: -73.968285 },
});
// Create an array of alphabetical characters used to label the markers.
const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Add some markers to the map.
// Note: The code uses the JavaScript Array.prototype.map() method to
// create an array of markers based on a given "locations" array.
// The map() method here has nothing to do with the Google Maps API.
var locations = [
 { lat: 40.785091, lng: -73.968285},
 { lat: 41.084045, lng: -73.874245},
 { lat: 40.754932, lng: -73.984016}
];

const markers = locations.map((location, i) => {
return new google.maps.Marker({
position: location,
label: labels[i % labels.length],
});
});
// Add a marker clusterer to manage the markers.
new MarkerClusterer(map, markers, {
imagePath:
"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
});
}
