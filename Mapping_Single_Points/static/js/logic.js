// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);


// Following code is an alternative to using setView() method. Allows us to modify each attribute in the map object. 
// Useful when we need to add multiple tile layers, or a background image of our map(s). 
    // Create the map object with a center and zoom level.
    // let map = L.map("mapid", {
    //     center: [
    //       40.7, -94.5
    //     ],
    //     zoom: 4
    //   });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// To change the map's style, change the map id using the list of Mapbox ids below:

//     mapbox/streets-v11
//     mapbox/outdoors-v11
//     mapbox/light-v10
//     mapbox/dark-v10
//     mapbox/satellite-v9
//     mapbox/satellite-streets-v11

// If we wanted to use Mapbox Styles API instead of Leaflet Documentation (code above)
    // We create the tile layer that will be the background of our map.
    // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    //     maxZoom: 18,
    //     accessToken: API_KEY
    // });

    // // Then we add our 'graymap' tile layer to the map.
    // streets.addTo(map);