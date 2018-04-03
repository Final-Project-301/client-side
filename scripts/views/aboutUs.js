'use strict';

//Array of Objects containing our About Us information.
var aboutUsData = [
  {image_url: 'img/RyanPic.jpg',
    name: 'Ryan Groesch',
    bio:'Ryan is a left-handed, motorcycle riding, sportsball loving nerd. His interests branch to anything from athletics (baseball, frisbee, football, curling and even cricket) to intellectual endeavors (videogames, reading and thoughtful discussions). Ryan looks to learn something every day and take one step closer to being a "renaissance man".',
    linkedin_url: 'https://www.linkedin.com/in/ryan-groesch/',
    github_url: 'https://github.com/ryan-g13',
    email: 'mailto:ryan.groesch@gmail.com'
  },
  {image_url: 'img/JoannaPic.png',
    name: 'Joanna Coll',
    bio: 'Originated in Poland, lived in Ireland and UK before relocating to Seattle with her family 4 years ago. Currently trying to pursue her goal of becoming a Software Developer, but with her love for Python may become a Data Scientist. Joanna loves to cook and even more to eat, with a passion for gastro-tourism. In her free time she enjoys traveling and volunteering as an event planner.',
    linkedin_url: 'https://www.linkedin.com/in/joanna-coll/',
    github_url: 'https://github.com/johannam999',
    email: 'mailto:johannam999@gmail.com'
  },
  {image_url: 'img/CollinPic.jpg',
    name: 'Collin Meredith',
    bio: 'Sample data here',
    linkedin_url: 'Sample data here',
    github_url: 'Sample data here',
    email: 'Sample data here'
  },
  {image_url: 'img/ScottPic.jpg',
    name: 'Scott Thompson',
    bio: 'Hello there! My name is Scott, current Code Fellows student and sports fan. I enjoy long walks on the beach, traveling, and the gym. Also have been a big fan of video games throughout my life, duel me in smash!',
    linkedin_url: 'https://www.linkedin.com/in/scott-thompson-087508158/',
    github_url: 'https://github.com/ScottyKnows44',
    email: 'mailto:scottcfalcon@gmail.com'
  }
];
aboutUsData.toHtml = function() {
  let template = Handlebars.compile($('#about-us-template').html());
  return template;
};
//Function that hides all other information and then displays the about page.
aboutUsData.initAboutUs = () => {
  // $('.view').hide();
  aboutUsData.forEach(person => $('#aboutUsPage').append(person.toHtml()));

  $('#aboutUsPage').show();
};
