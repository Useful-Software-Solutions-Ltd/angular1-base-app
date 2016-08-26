(function () {
    'use strict';

    angular.module('content')
        .controller('FeaturesController', FeaturesController);

    FeaturesController.$inject = [ 'appActivityService'];

    function FeaturesController( appActivityService) {
        /* jshint validthis:true */
        var vm = this;

        vm.title = 'features';
        vm.features = [];
        
        activate();

        function activate() {
            var busy = false, appActivityFeature, navigationFeature;
           
            appActivityFeature = {
                name: "application activity service (appActivityService)",
                description: "Allows the app to track whether it is busy or not. Use the busy/idle methods let the app know. Also use the sk-disable-when-busy directive to disable elements whilst the app is busy.",
                demo: function () {
                    if (busy) {
                        appActivityService.idle("demo");
                        busy = false;                        
                    } else {
                        appActivityService.busy("demo");
                        busy = true;
                    }
                }
            };

            vm.features.push(appActivityFeature);

            navigationFeature = {
                name: "Dynamic navbar links",
                description: "Add the property showNav to a route to show it as a link in the navbar. eg showNav: 'linkText'"
            };

            vm.features.push(navigationFeature);
        }
    }
})();
