'use strict';
page('/', (ctx) => initMap(ctx));
page('/about', ctx => app.Bio.initAboutUs(ctx));
page('/client-side', (ctx) => initMap(ctx));

page();