
// create data objects

function Place(rawPlaceObject) {
  Object.keys(rawPlaceObject).forEach(key => this[key] = rawPlaceObject[key]);
}

var playArr = [];

Place.fetchPlay = callback =>
  $.get(`Database URL`)
    .then(Place.loadPlay)
    .then(callback)
    .catch(errorCallback);

Place.loadPlay = rows => playArr = rows.map(place => new Place(place));

// filter with user input

var userLat = (#).val();
var userLong = (#).val(); 

google.maps.event.addDomListener(window, 'load', function() {
    var input = document.getElementById('autocomplete');
    map.autocomplete = new google.maps.places.Autocomplete(input);
  });

function initMap() {

    var seattle = {lat: 47.6062, lng:-122.3321};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: seattle
  });

  for(let i=0; i <playArr.length; i++){

    var newPlace = {lat: playArr[i].lat, lng: playArr[i].long};

        var marker = new google.maps.Marker({
            position: newPlace
            map: map
        });

    }
}

