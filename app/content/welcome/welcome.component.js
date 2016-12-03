(function() {
'use strict';

    angular
        .module('content')
        .component('welcome', {            
            templateUrl: './content/welcome/welcome.component.html',
            controllerAs: 'vm',
            controller: WelcomeController,
            bindings: {                
            }
        });

    WelcomeController.$inject = [];
    function WelcomeController() {
        var vm = this;
        
        vm.title = 'welcome';
        vm.description = 'component based AngularJS 1.5';

        ////////////////

        vm.$onInit = function() { };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestory = function() { };
    }
})();