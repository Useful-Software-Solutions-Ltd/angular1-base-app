(function () {
    'use strict';

    angular
        .module('shell')
        .component('shell', {
            templateUrl: './shell/shell.component.html',
            controllerAs: 'vm',
            controller: ShellController,
            bindings: {
                Binding: '=',
            },
        });

    ShellController.$inject = ['$mdSidenav'];

    function ShellController($mdSidenav) {
        var vm = this;

        vm.toggleList = toggleList;

        function toggleList() {
            $mdSidenav('left-sidenav').toggle();
        }

        vm.$onInit = function () { };
        vm.$onChanges = function (changesObj) { };
        vm.$onDestory = function () { };
    }
})();