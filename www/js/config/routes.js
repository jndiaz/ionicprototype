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
          controller: 'HomeController as vm',
          data:{
            title: 'Home'
          }
        },
        'navbar': {
          templateUrl: 'templates/components/navbar.html',
        },
        'sidemenu': {
          templateUrl: 'templates/components/sidemenu.html',
          controller: 'sideMenuController as vm'
        },
      }
    })
    .state('base.asignatures', {
      url: '/asignatures',
      views: {
        'content': {
          templateUrl: 'templates/pages/asignatures.html',
          controller: 'AsignaturesController as vm',
          data:{
            title: 'Asignatures'
          }
        },
        'navbar': {
          templateUrl: 'templates/components/navbar.html',
        },
        'sidemenu': {
          templateUrl: 'templates/components/sidemenu.html',
          controller: 'sideMenuController as vm'
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
