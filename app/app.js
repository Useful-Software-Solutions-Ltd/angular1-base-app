(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngAria', 'ngAnimate', 'ngMaterial', 'core', 'shell', 'content']);

    app.config(config);

    config.$inject = ['$locationProvider','$compileProvider'];

    function config ($locationProvider, $compileProvider) {
        $compileProvider.debugInfoEnabled(false);
        $locationProvider.html5Mode(true);                
    }
    
    app.run(['$route', function ($route) {                
    }]);
})();