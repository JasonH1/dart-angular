define(function (require) {
  'use strict';
  var angular = require('angular'),
    main = require('./main'),
    routes = main.config(
      ['$routeProvider', '$locationProvider', '$httpProvider',
        function ($routeProvider, $locationProvider, $httpProvider) {
          $locationProvider.html5Mode(false);
          $routeProvider
            .when('/', {
              template: main.partials.Main,
              controller: 'BaseController'
            })
            .when('/api', {
              template: main.partials['api/index'],
              controller: 'ApiController'
            })
            .otherwise({redirectTo: '/'});
        }
      ]
    );
  return routes;
});