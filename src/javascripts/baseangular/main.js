define(function(require) {
    'use strict';
    var angular = require('angular'),
        angularBootstrap = require('angularBootstrap'),
        angularResource = require('angularResource'),
        angularRoute = require('angularRoute'),
        controllers = require('./controllers'),
        partials = require('../../partials/main'),
        app = angular.module('telepath', [
            'ngRoute',
            controllers.name
        ]);
    app.partials = partials;


    return app;
});
