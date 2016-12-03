(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('shell')
        .component('siteNavigation', {
            templateUrl:'shell/site-navigation.component.html',            
            controller: SiteNavigationController,
            bindings: {
                Binding: '=',
            },
        });

    SiteNavigationController.$inject = ['navigationService'];
    function SiteNavigationController(navigationService) {
        var vm = this;

        vm.$onInit = function() { 
            vm.links = navigationService.getLinks();
        };

        vm.$onChanges = function(changesObj) {

         };

        vm.$onDestory = function() { 

        };
    }
})();