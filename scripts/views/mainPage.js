'use strict';
var app = app || {};

(function(module) {
  let Home = {};
  $('#home-nav').on('click', function(event) {
    event.preventDefault();
    $('.content').show();
    $('#aboutUsPage').hide();
    $('#references').hide();
    page(`/client-side/`);
  });
  module.Home = Home;
})(app);



