'use-strict';

var app = app || {};

(function(module) {

  function Place(rawPlaceObject) {
    Object.keys(rawPlaceObject).forEach(key => this[key] = rawPlaceObject[key]);
  }

  module.playArr = [];
  module.dogArr = [];
  module.waterArr = [];

  Place.fetchPlay = callback =>
    $.get('http://localhost:3000/activities/play')
      .then( results => {
        console.log('fetch works');
        Place.loadPlay(results);
        callback();
      });

  Place.loadPlay = rows => module.playArr = rows.map(place => new Place(place));

  Place.fetchPlay();

  Place.fetchDog = callback =>
    $.get('http://localhost:3000/activities/dogs')
      .then( results => {
        console.log('fetch works');
        Place.loadDog(results);
        callback();
      });

  Place.loadDog = rows => module.dogArr = rows.map(place => new Place(place));

  Place.fetchDog();

  Place.fetchWater = callback =>
    $.get('http://localhost:3000/activities/water')
      .then( results => {
        console.log('fetch works');
        Place.loadWater(results);
        callback();
      });

  Place.loadWater = rows => module.waterArr = rows.map(place => new Place(place));

  Place.fetchWater();


  module.Place = Place;

})(app);

