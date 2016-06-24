//Routing config
angular.module('starter.config')
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

    // Base
    .state('base', {
      url: '',
      templateUrl: 'templates/layout.html',
      abstract: true,
    })
    .state('base.home', {
      url: '/home',
      views: {
        'content': {
          templateUrl: 'templates/pages/home.html',
          controller: 'HomeController'
        },
        'navbar': {
          templateUrl: 'templates/components/navbar.html',
          controller: 'navbarController'
        },
        'sidemenu': {
          templateUrl: 'templates/components/sidemenu.html',
          controller: 'navbarController'
        },
      }
    })
    .state('base.asignatures', {
      url: '/asignatures',
      views: {
        'content': {
          templateUrl: 'templates/pages/asignatures.html',
          controller: 'AsignaturesController'
        },
        'navbar': {
          templateUrl: 'templates/components/navbar.html',
          controller: 'navbarController'
        },
        'sidemenu': {
          templateUrl: 'templates/components/sidemenu.html',
          controller: 'navbarController'
        },
      }
    })
    // login state
    .state('login', {
      url: '/login',
      templateUrl: 'templates/specials/login.html',
      controller: 'LoginController as vm'
    });

  $urlRouterProvider.otherwise('/home');

});
