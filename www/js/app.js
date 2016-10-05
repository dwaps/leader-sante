/**
 * Auteur : DWAPS - Michael Cornillon
 * Client :	Leader Santé (Leader Alès), Gard (30)
 * Mail : 	contact@dwaps.fr
 * Tel :	0651279211
 * Site : 	dwaps.fr
 * Date : 	27/11/2015
 **/

'use strict';

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var leadersante = angular.module('leadersante', ['ionic'])

.run(function($ionicPlatform, $location, $ionicConfig, $rootScope) {
      $ionicPlatform.ready(function() {

        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if(window.StatusBar) {
          StatusBar.styleDefault();
        }

        $location.path('/splashscreen');
        //$location.path('/accueil');

        initDataBox();

          // VARIABLES PROVISOIRES
          $rootScope.salle = '13';
          $rootScope.velo = '13';

          $ionicConfig.views.transition('none');
          $rootScope.stylePages = {display:'none'};
          $rootScope.hideTxt = {};
          $rootScope.btActive = [false,false,false,false]; // Boutons principaux
          $rootScope.showHeader = false;
          $rootScope.showHeader = {};
          $rootScope.showTitleBar = false;
          $rootScope.titlePage = '';
          $rootScope.toggleShowMenu = true;
          $rootScope.byDwaps = true;
          $rootScope.pageEquip = false; // Pour le fadeIn / fadeOut
          $rootScope.pageAtel = false; // Pour le fadeIn / fadeOut
          $rootScope.pageActiv = false; // Pour le fadeIn / fadeOut
          $rootScope.panelToBar = '';
          $rootScope.hideBt = '';

          if(isMobile.any()) {
              $rootScope.mobile = true;
          } else {
              $rootScope.mobile = false;
          }

        //window.onhashchange = function() {
        //    var go = false;
        //
        //    switch($location.path()) {
        //        case '/accueil':
        //            $rootScope.showTitleBar = false; go = true;
        //        case '/equipement':
        //            $rootScope.titlePage = 'EQUIPEMENT'; go = true;
        //        case '/ateliers':
        //            $rootScope.titlePage = 'ATELIERS'; go = true;
        //        case '/activites':
        //            $rootScope.titlePage = 'ACTIVITES'; go = true;
        //    }
        //
        //    if(go) $rootScope.loadPage($location.path());
        //};

        $rootScope.loadPage = function(route) {
            $rootScope.toggleShowMenu = false;

            $rootScope.pageEquip = false;
            $rootScope.pageAtel = false;
            $rootScope.pageActiv = false;


            switch(route) {
                case '/equipement':
                    $rootScope.titlePage = 'EQUIPEMENT';
                    $rootScope.pageEquip = true;
                    $rootScope.pageAtel = false;
                    $rootScope.pageActiv = false;
                    activateBt(0);
                    break;
                case '/ateliers':
                    $rootScope.titlePage = 'ATELIERS';
                    $rootScope.pageEquip = false;
                    $rootScope.pageAtel = true;
                    $rootScope.pageActiv = false;
                    activateBt(1);
                    break;
                case '/activites':
                    $rootScope.titlePage = 'ACTIVITES';
                    $rootScope.pageEquip = false;
                    $rootScope.pageAtel = false;
                    $rootScope.pageActiv = true;
                    activateBt(2);
                    break;
            }

            if($rootScope.dataBox.authorized) {
                $rootScope.panelToBar = 'panel-to-bar';
            }
            return false;
        }
      });

    $rootScope.showMenu = function() {
        if($rootScope.toggleShowMenu) {
            $rootScope.toggleShowMenu = false;
        } else {
            $rootScope.toggleShowMenu = true;
        }
    };

    $rootScope.verifMP = function() {
        if($rootScope.dataBox.mp == 'test') {
            $rootScope.hideBt = 'hide-bt';
            $rootScope.showTitleBar = true;
            $rootScope.dataBox.authorized = true;
            $rootScope.loadPage('/equipement');
            $rootScope.hideTxt= {
                'font-size': '0'
            };
            $rootScope.stylePages = {};

            if($rootScope.panelToBar == '' && $rootScope.dataBox.authorized) {
                $rootScope.panelToBar = 'panel-to-bar';
            }
        }
    };

    function activateBt(id) {
        for(var i = 0; i < $rootScope.btActive.length; i++) {
            if(i == id) $rootScope.btActive[i] = true;
            else $rootScope.btActive[i] = false;
        }
    }

    function initDataBox() {
        $rootScope.dataBox = {
            authorized: false,
            mp : ''
        };
    }
});
