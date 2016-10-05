'use strict';

leadersante
    .directive('equipement', function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'views/equipement.html'
        };
    });