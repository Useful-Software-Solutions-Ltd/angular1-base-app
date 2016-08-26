(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngMaterial', 'core', 'shell', 'content']);

    app.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true);                
    }]);
    
    app.run(['$route', function ($route) {                
    }]);
})();