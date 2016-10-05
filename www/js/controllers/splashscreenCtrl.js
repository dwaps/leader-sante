'use strict';

leadersante
    .controller('splashscreen', function($scope, $rootScope, $location, $timeout) {

        $scope.start = true;

        $timeout(function() {
            $scope.start = false;

            $timeout(function() {

                $timeout(function() {
                    $location.path('/accueil');
                    $rootScope.showFooter = {toUp:true};
                }, 500);

            }, 1800);

        }, 3000);

    });