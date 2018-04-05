'use strict';


var autocomplete;

// LEGEND

var icons = {
  play: {
    name: 'Play Areas',
    icon: 'img/childIcon.png'
  },
  dogs: {
    name: 'Dog Off-Leash Areas',
    icon: 'img/dogIcon.png'
  },
  water: {
    name: 'Waterfront Areas',
    icon: 'img/waterIcon.png'
  }
};

var legend = document.getElementById('legend');

for (var key in icons) {
var type = icons[key];
var name = type.name;
var icon = type.icon;
var div = document.createElement('div');
div.innerHTML = '<img src="' + icon + '"> ' + name;
legend.appendChild(div);
}



function initMap() {

  // event.preventDefault();

  // INIT MAP

  var seattle = {lat: 47.6062, lng: -122.3321};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: seattle
  });

  // AUTOCOMPLETE

  autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('autocomplete')), {
    });

  autocomplete.addListener('place_changed', onPlaceChanged);

  // PLAY AREAS CODE

  if ($('#playBox').prop('checked')){

    app.Place.fetchPlay(initPlayHelper);

  }

  function initPlayHelper(){

    let image = 'img/childIcon.png';

    for (let i=0; i<app.playArr.length;i++) {

      let newPlace = {lat: parseFloat(app.playArr[i].latitude), lng: parseFloat(app.playArr[i].longitude)};

      let playMarker = new google.maps.Marker({
        position: newPlace,
        map: map,
        icon: image
      });

      let contentString = '<div class="popUp">'+
            '<h1>' + app.playArr[i].name + '</h1>'+
            '<p>' + app.playArr[i].address + '</p>'+
            '<a href="' + app.playArr[i].website + '">' + '<p>' + app.playArr[i].website + '</p>' + '</a>' +
            '</div>';

      let infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

      playMarker.addListener('click', function() {
        infowindow.open(map, playMarker);
      });

    }
  }

  // DOG AREAS CODE

  if ($('#dogsBox').prop('checked')){

    app.Place.fetchDog(initDogHelper);

  }

  function initDogHelper(){

    let image = 'img/dogIcon.png';

    for (let i=0; i<app.dogArr.length;i++) {

      let newPlace = {lat: parseFloat(app.dogArr[i].latitude), lng: parseFloat(app.dogArr[i].longitude)};

      let dogMarker = new google.maps.Marker({
        position: newPlace,
        map: map,
        icon: image
      });

      let contentString = '<div class="popUp">'+
      '<h1>' + app.dogArr[i].name + '</h1>'+
      '<p>' + app.dogArr[i].address + '</p>'+
      '<a href="' + app.dogArr[i].website + '">' + '<p>' + app.dogArr[i].website + '</p>' + '</a>' +
      '</div>';

      let infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      dogMarker.addListener('click', function() {
        infowindow.open(map, dogMarker);
      });

    }
  }

  // WATER AREAS CODE

  if ($('#waterBox').prop('checked')){
    app.Place.fetchWater(initWaterHelper);
  }

  function initWaterHelper(){

    let image = 'img/waterIcon.png';

    for (let i=0; i<app.waterArr.length;i++) {

      let newPlace = {lat: parseFloat(app.waterArr[i].latitude), lng: parseFloat(app.waterArr[i].longitude)};

      let waterMarker = new google.maps.Marker({
        position: newPlace,
        map: map,

        icon: image
      });

      let contentString ='<div class="popUp">'+
      '<h1>' + app.waterArr[i].name + '</h1>'+
      '<p>' + app.waterArr[i].address + '</p>'+
      '<a href="' + app.waterArr[i].website + '">' + '<p>' + app.waterArr[i].website + '</p>' + '</a>' +
      '</div>';

      let infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      waterMarker.addListener('click', function() {
        infowindow.open(map, waterMarker);
      });

    }
  }
  function onPlaceChanged() {
    var place = autocomplete.getPlace();
    if (place.geometry) {
      map.panTo(place.geometry.location);
      map.setZoom(15);
    } else {
      document.getElementById('autocomplete').placeholder = 'search locations';
    }
  }
  $('#submit').on('click', initMap);
}


