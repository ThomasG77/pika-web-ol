import Map from '/web_modules/ol/Map.js';
import View from '/web_modules/ol/View.js';
import TileLayer from '/web_modules/ol/layer/Tile.js';
import OSM from '/web_modules/ol/source/OSM.js';


var map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});