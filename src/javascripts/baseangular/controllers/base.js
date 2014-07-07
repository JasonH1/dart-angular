define(function(require) {
    var controllers = require("./main");

    controllers.controller('BaseController', ['$scope', '$rootScope',
        function($scope, $rootScope) {
        	console.log('BaseController loaded');
        }
    ]);
});