(function () {
    'use strict';

    angular.module('content')
        .controller('WelcomeController',WelcomeController);

    function WelcomeController() {
        /* jshint validthis:true */
        var vm = this;

        vm.title = 'Angular starter kit';
        vm.description = `An angular 1 base project.`;
        activate();

        function activate() { }
    }
})();
