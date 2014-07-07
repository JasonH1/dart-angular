define(function(require) {
    var controllers = require("./main");

    controllers.controller('ApiController', ['$scope', '$rootScope',
        function($scope, $rootScope) {
        	console.log('Api Controller loaded');
        }
    ]);
});