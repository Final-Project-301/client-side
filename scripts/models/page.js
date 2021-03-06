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
    $.get(`${ENV.apiUrl}/activities/play`)
      .then( results => {
        Place.loadPlay(results);
        if (callback) callback();
      });

  Place.loadPlay = rows => module.playArr = rows.map(place => new Place(place));

  Place.fetchPlay();

  // DOG

  Place.fetchDog = callback =>
    $.get(`${ENV.apiUrl}/activities/dogs`)
      .then( results => {
        Place.loadDog(results);
        if (callback) callback();
      });

  Place.loadDog = rows => module.dogArr = rows.map(place => new Place(place));

  Place.fetchDog();

  // WATER

  Place.fetchWater = callback =>
    $.get(`${ENV.apiUrl}/activities/water`)
      .then( results => {
        for (let i=0;i<results.length;i++){
          if (results[i].address === null){
            results[i].address = 'address not available';
          }
        }
        Place.loadWater(results);
        if (callback) callback();
      });

  Place.loadWater = rows => module.waterArr = rows.map(place => new Place(place));

  Place.fetchWater();
  $('#references').hide();

  module.Place = Place;

})(app);

