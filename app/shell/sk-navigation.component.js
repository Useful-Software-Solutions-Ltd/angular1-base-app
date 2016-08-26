(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('shell')
        .component('skNavigation', {
            templateUrl:'shell/sk-navigation.html',            
            controller: SkNavigationController,
            bindings: {
                Binding: '=',
            },
        });

    SkNavigationController.$inject = ['navigationService'];
    function SkNavigationController(navigationService) {
        var $ctrl = this;

        $ctrl.links;

        $ctrl.$onInit = function() { 
            $ctrl.links = navigationService.getLinks();
        };

        $ctrl.$onChanges = function(changesObj) {

         };

        $ctrl.$onDestory = function() { 

        };
    }
})();