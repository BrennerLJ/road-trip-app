
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