(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("tutorial",
{ "height":10,
 "layers":[
        {
         "data":[50, 1, 50, 2, 50, 1, 50, 50, 50, 50, 50, 50, 39, 24, 24, 4, 50, 1, 50, 50, 50, 50, 36, 50, 50, 5, 6, 7, 50, 50, 50, 50, 36, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 8, 50, 2, 50, 8, 50, 50, 50, 50, 26, 27, 39, 24, 38, 4, 50, 8, 50, 50, 50, 50, 50, 50, 50, 12, 13, 14, 50, 43, 50, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 50, 43, 15, 50, 2, 50, 15, 50, 26, 27, 50, 26, 27, 39, 24, 24, 4, 50, 15, 43, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 43, 50, 27, 50, 50, 37, 2, 2, 2, 2, 2, 2, 2, 2, 10, 3, 3, 17, 2, 2, 2, 9, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 60, 26, 27, 50, 50, 50, 50, 50, 50, 50, 50, 50, 39, 24, 24, 4, 26, 27, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 19, 20, 21, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 4, 50, 50, 50, 50, 50, 50, 50, 26, 27, 43, 50, 39, 24, 24, 81, 32, 60, 50, 50, 50, 50, 50, 43, 50, 50, 50, 50, 50, 50, 22, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 81, 60, 50, 50, 50, 50, 50, 26, 27, 50, 53, 32, 25, 24, 24, 24, 24, 81, 60, 50, 50, 50, 50, 50, 50, 50, 50, 5, 6, 7, 29, 43, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 24, 81, 32, 32, 32, 32, 32, 32, 32, 32, 25, 24, 24, 24, 24, 24, 24, 24, 81, 32, 60, 50, 50, 50, 50, 50, 50, 12, 13, 14, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 24, 24, 24, 24, 24, 24, 24, 38, 31, 24, 24, 24, 24, 24, 52, 45, 38, 24, 24, 24, 81, 32, 32, 60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 31, 38, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 52, 45, 52, 45, 45, 24, 31, 24, 24, 24, 24, 81, 32, 32, 32, 32, 32, 60, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 50, 50, 36],
         "height":10,
         "name":"Tile Layer 1",
         "offsetx":-952,
         "offsety":-24,
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":43,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.0.3",
 "tileheight":60,
 "tilesets":[
        {
         "columns":7,
         "firstgid":1,
         "image":"tutorial.png",
         "imageheight":720,
         "imagewidth":420,
         "margin":0,
         "name":"tutorial",
         "spacing":0,
         "tilecount":84,
         "tileheight":60,
         "tilewidth":60
        }],
 "tilewidth":60,
 "type":"map",
 "version":1,
 "width":43
});