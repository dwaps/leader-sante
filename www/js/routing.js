'use strict';

var cacheActive = false;

leadersante
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('splashscreen', {
                cache: cacheActive,
                url: '/splashscreen',
                controller: 'splashscreen',
                templateUrl: 'views/splashscreen.html'
            })
            .state('accueil', {
                cache: cacheActive,
                url: '/accueil',
                controller: 'accueil',
                templateUrl: 'views/accueil.html'
            });

        $urlRouterProvider.otherwise('/splashscreen');

    });