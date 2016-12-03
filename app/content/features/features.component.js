(function() {
'use strict';

    angular
        .module('content')
        .component('features', {            
            templateUrl: './content/features/features.component.html',
            controllerAs: 'vm',
            controller: FeaturesController,
            bindings: {                
            }
        });

    FeaturesController.$inject = [];
    function FeaturesController() {
        var vm = this;
        
        vm.title = 'features';
        vm.description = 'component based AngularJS 1.5';

        ////////////////

        vm.$onInit = function() { };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestory = function() { };
    }
})();