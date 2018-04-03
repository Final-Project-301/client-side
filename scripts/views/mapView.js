'use strict';

// function initMap() {
//   var seattle = {lat: 47.6062, lng: -122.3321};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 11,
//     center: seattle
//   });
//   var marker = new google.maps.Marker({
//     position: seattle,
//     map: map
//   }); 
// }

// service = new google.maps.places.PlacesService(map);
// service.nearbySearch(request, callback);

// var ac=new google.maps.places.Autocomplete(getElementById('autocomplete'));
//   google.maps.event.addListener(ac, 'place_changed', function(){
//     var place = ac.getPlace();
//   });
// var map;
// var service;
// var infowindow;

// function initialize() {
//   var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

//   map = new google.maps.Map(document.getElementById('map'), {
//       center: pyrmont,
//       zoom: 15
//     });

//   var request = {
//     location: pyrmont,
//     radius: '500',
//     query: 'restaurant'
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.textSearch(request, callback);
// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// }