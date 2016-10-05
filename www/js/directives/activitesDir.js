'use strict';

leadersante
    .directive('activites', function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'views/activites.html'
        };
    });