// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// Alternative method being utilized to allow us to modify each attribute in the map object.
    //Create the map object with a center and zoom level. 
// let map = L.map("mapid", {
//     center: [40.7, -94.5],
//     zoom: 4
// });

//Removed the San Francisco GeoJSON data given to make more room for new code.

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// Demonstrating pointToLayer() function.
// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.name +"</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//     }

//   }).addTo(map);

// Grabbing our GeoJSON data
    // onEachFeature Function
// L.geoJson(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2> <hr> <h3> Airport name: " + feature.properties.name + "</h3>");
//     }
// }).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/RagingRyann/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});

// 13.5.3 Skill Drill -- Not working yet....
// L.geoJSON(airportData, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2> Airport code: " + features.properties.faa + "</h2><hr><h3> Airport name: " + features.properties.name + "</h3>");
//     }
// }).addTo(map);

// Suggestion from AskBCS Assistant: 
// Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/TomBerton/Mapping_Earthquakes/master/majorAirports.json";
// d3.json(airportData).then(function(data) {
//    console.log(data);
//  // Creating a GeoJSON layer with the retrieved data.
//  L.geoJson(data, {
//         onEachFeature: function(feature, layer) {
//             console.log(layer);
//             layer.bindPopup("<h3> Airport code: " + feature.properties.faa + "</h3> <hr><h3> Airport name: "
//                  + feature.properties.name + "</h3>");
//         }
//     }).addTo(map);
// });

// Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/TomBerton/Mapping_Earthquakes/master/majorAirports.json";
// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//    console.log(data);
//  // Creating a GeoJSON layer with the retrieved data.
//  L.geoJson(data).addTo(map);
// });