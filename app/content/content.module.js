(function () {
    'use strict';

    var content = angular.module('content', []);

    content.config(['$routeProvider', 'baseUrl', function ($routeProvider, baseUrl) {
        $routeProvider.caseInsensitiveMatch = true;

        $routeProvider.when('/', {
            template: '<welcome></welcome>',            
        })
        .when('/welcome', {
            template: '<welcome></welcome>',          
            showNav: 'welcome'
        })
        .when('/features', {
            template: '<features></features>',         
            showNav: 'features'
        })    
        .otherwise('/');
    }]);

})();