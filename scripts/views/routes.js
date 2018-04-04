'use strict';
page('/', ctx => console.log('hurra')
  //, ()=> initMap()
);
page('/about', ctx => app.Bio.initAboutUs(ctx));
page();