'use strict';

leadersante
    .directive('ateliers', function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'views/ateliers.html'
        };
    });