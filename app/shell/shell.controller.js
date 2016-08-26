(function () {
    'use strict';

    angular.module('shell')
            .controller('ShellController', ShellController);

    ShellController.$inject = ['$mdSidenav'];

    function ShellController($mdSidenav) {
        /* jshint validthis:true */
        var vm = this;

        this.toggleList = toggleList;

        function toggleList(){
            $mdSidenav('left-sidenav').toggle();
        }
    }

})();
