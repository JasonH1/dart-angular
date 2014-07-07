define(function (require) {
    var controllers = require('./controllers/main');

    require('./controllers/api');
    require('./controllers/base');


  return controllers;
});
