require.config({
  //baseUrl: '.',
  waitSeconds: 0,
  // optimizer configuration
  optimize: 'uglify2',
  preserveLicenseComments: false,
  generateSourceMaps: true,

  uglify2: {
    output: {
      beautify: false
    },

    mangle: false
  },

  // runtime paths and shims
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
    bower_angular: '../bower_components/angular/angular',
    angularTouch: '../bower_components/angular-touch/angular-touch',
    angularLocalStorage: '../bower_components/angularLocalStorage/src/angularLocalStorage',
    angularResource: '../bower_components/angular-resource/angular-resource',
    angularRoute: '../bower_components/angular-route/angular-route',
    angularSanitize: '../bower_components/angular-sanitize/angular-sanitize',
    angularMocks: '../bower_components/angular-mocks/angular-mocks',
    angularCookies: '../bower_components/angular-cookies/angular-cookies',
    angularBootstrap: '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
    ngGrid: '../bower_components/ng-grid/ng-grid-2.0.7.min',
    lodash: '../bower_components/lodash/dist/lodash',
    text: '../bower_components/requirejs-text/text',
    restangular: '../bower_components/restangular/dist/restangular',
    moment: '../bower_components/momentjs/min/moment.min',
    angularSliderVenturocket:'telepath/directives/angular-slider',
    angularUpload: '../bower_components/angular-upload/angular-upload',
    underscore: '../bower_components/underscore/underscore',
    raphael: '../bower_components/raphael/raphael'
  },

  shim: {
    "bower_angular": {
      deps: ["jquery"],
      exports: "angular"
    },
    "angularRoute": {
      deps: ["bower_angular"]
    },
    "angularLocalStorage": {
      deps: ["bower_angular", "angularCookies"]
    },
    "angularResource": {
      deps: ["bower_angular"]
    },
    "angularSanitize": {
      deps: ["bower_angular"]
    },
    "angularMocks": {
      deps: ["bower_angular"],
      exports: 'angular.mock'
    },
    "angularCookies": {
      deps: ["bower_angular"]
    },
    "angularBootstrap": {
      deps: ["bower_angular"]
    },
    "angularTouch": {
      deps: ['bower_angular']
    },
    "restangular": {
      deps: ['bower_angular', 'lodash']
    },
    "angularSliderVenturocket": {
      deps: ['bower_angular', 'angularTouch']
    },
    "ngGrid": {
      deps: ['bower_angular']
    },
    "bootstrap": {
        deps: ['jquery']
    },
    "angularUpload": {
        deps: ['angular']
    },
    'underscore': {
      exports: '_'
    }
  }
});



var root = this;
var count = 0,
  updateModuleProgress = function(context, map, depMaps) {
    count += 1;
    var fetched = Object.keys(context.urlFetched).length,
      el = root.document.getElementById('requirejs-progress'),
      percentLoaded;

    if (el && fetched > 0) {
      percentLoaded = Math.min(100, (count / fetched) * 100);
      el.style.width = percentLoaded + '%';
    }
  };

require.onError = function(err, requireModules) {
  var progressEl = root.document.getElementById('requirejs-progress'),
    statusEl = root.document.getElementById('requirejs-status');

  if (progressEl) {
    progressEl.parentNode.className = progressEl.parentNode.className +
      ' progress-danger';
  }

  if (statusEl) {
    statusEl.innerHTML = 'Error loading application...';
  }
  console.error(err.message, err, requireModules);

  throw err; // helps debugging, shows file+line numbers that failed
};


// IE console issue when the developer tools are not opened.
//Ensures there will be no 'console is undefined' errors
if(!window.console){
    window.console = window.console || (function(){
        var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
        return c;
    })();
}


// hack to force proper shimming of angular when compiled via play
define('angular', ['bower_angular'], function (angular) {
  return angular;
});

if (typeof window !== 'undefined') {
  window.name = "NG_DEFER_BOOTSTRAP!";
}



require([
  'jquery',
  'angular',
  'baseangular/main',
  'baseangular/routes'
], function ($, angular, app, routes) {
  'use strict';
 var $html = angular.element(document.getElementsByTagName('html')[0]);
 angular.element().ready(function () {
    $html.addClass('ng-app');
    angular.bootstrap($html, [app.name]);
  });
});




