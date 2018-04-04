'use strict';
var app = app || {};

(function(module) {
  let Home = {};
  $('#home-nav').on('click', function(event) {
    console.log('home working');
    event.preventDefault();
    $('.content').show();
    $('#aboutUsPage').hide();
    page(`/`);
  });
  module.Home = Home;
})(app);



