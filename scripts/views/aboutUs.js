'use strict';
var app = app || {};

//Array of Objects containing our About Us information.
(function(module) {

  Bio.aboutUsData = [];

  function Bio(rawBioObject) {
    Object.keys(rawBioObject).forEach(key => this[key] = rawBioObject[key]);
  }

  Bio.fetchBios = callback =>
    $.get('http://localhost:3000/activities/bios')
      .then( results => {
        console.log(results);
        Bio.loadBio(results);
        if (callback) callback();
      });

  Bio.loadBio = rows => Bio.aboutUsData = rows.map(bio => new Bio(bio));

  Bio.fetchBios();

  Bio.initAboutUs = function() {
    let template = Handlebars.compile($('#about-us-template').text());
    Bio.aboutUsData.forEach(person => $('#aboutUsPage').append(template(person)));

  };
  $('#about-nav').on('click', function(event) {
    event.preventDefault();
    $('#aboutUsPage').empty();
    $('.content').hide();
    $('#aboutUsPage').fadeIn(500);
    page(`/about`);
  });
  module.Bio = Bio;
})(app);