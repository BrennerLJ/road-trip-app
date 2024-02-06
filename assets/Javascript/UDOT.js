// UDOT API
const apiKey = '5af94dd0937d48d3907b1f9fd170e21a';
const apiUrl = 'https://www.udottraffic.utah.gov/api/v2/get/cameras';

const requestUrl = `${apiUrl}?key=${apiKey}`;
const url = 'https://corsproxy.io/?' + encodeURIComponent(requestUrl);
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    for (var i = 0; i < data.length; i++) {
        
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        link.textContent = data[i].html_url;
        link.href = data[i].html_url;
        
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
  }
}

// Fuel API

// Initialize Communication with Back-end Services
const platform = new H.service.Platform({
  apikey: 'TBasdBDvMftaCFwKonVHHM6_xUWoaMEGjmqHRvTIJtM'
});
 // Obtain the default map types from the platform
var defaultLayers = platform.createDefaultLayers();

// Initialize the Map
const map = new H.Map(document.getElementById('map'), maptypes.vector.normal.map, {
  center: {lat: 0, lng: 51},
  zoom: 8
});

// Enable the event system on the map instance:
var mapEvents = new H.mapevents.MapEvents(map);

// Instantiate the default behavior, providing the mapEvents object:
new H.mapevents.Behavior(mapEvents);