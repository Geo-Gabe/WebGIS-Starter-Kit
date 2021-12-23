const cities = {
  ventura: [34.30153581385, -119.086814022],
  santa_barbara: [34.43087, -119.71139],
  los_angeles: [34.0522342, -118.2436849],
  sacramento: [38.5815719, -121.4943996],
  san_francisco: [37.7749295, -122.4194155],
  guadalajara: [20.6596988, -103.3496092],
  tulum: [20.2114185, -87.4653502],
  munich: [48.1351055, 11.5819931],
  florence: [43.7695604, 11.2558136],
};

var map = L.map("map").setView(cities.ventura, 11);

/* Basemap
 * more basemaps: https://leaflet-extras.github.io/leaflet-providers/preview/
 */
var OpenStreetMap_Mapnik = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

var wmsLayer = L.tileLayer
  .wms("http://geoserver_url.net:8080/geoserver/wms?", {
    layers: "layer_name",
    format: "image/png",
    transparent: true,
  })
  .addTo(map);
