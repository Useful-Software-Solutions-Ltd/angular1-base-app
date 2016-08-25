(function() {
    'use strict';

    angular
        .module('app.common')
        .directive('skHasError', skHasError);

    function skHasError() {
        var directive = {
            restrict: 'A',
            require: 'ngMessages',
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngMessages) {
            var render = ngMessages.render,
                reRender = ngMessages.reRender,
                hasErrorTarget;

            if (!hasErrorTarget) {
                if (attrs.skHasError) {
                    hasErrorTarget = element.parents('#' + attrs.skHasError);
                } else {
                    hasErrorTarget = element.parent('.form-group');
                }
            }

            ngMessages.render = function (collection) {
                renderMessages.apply(this, arguments);

                var values;

                if ($.isEmptyObject(values)) {
                    hasErrorTarget.removeClass('has-error');
                } else {
                    hasErrorTarget.addClass('has-error');
                }
            };





            ngMessages.renderMessages = function (values, multiple, element) {
                renderMessages.apply(this, arguments);

                if ($.isEmptyObject(values)) {
                    hasErrorTarget.removeClass('has-error');
                } else {
                    hasErrorTarget.addClass('has-error');
                }
            };
        }
    }
})();