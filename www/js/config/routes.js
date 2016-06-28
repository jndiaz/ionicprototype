//Routing config
angular.module('starter.config')
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

    // Base
    .state('base', {
      abstract: true,
      views: {
        '': {
          templateUrl: 'templates/layout.html'
        }
      }
    })
    .state('base.layout', {
      abstract: true,
      views: {
        'navbar': {
          templateUrl: 'templates/components/navbar.html',
        },
        'sidemenu': {
          templateUrl: 'templates/components/sidemenu.html',
          controller: 'sideMenuController as vm'
        },
      }
    })
    .state('base.layout.home', {
      url: '/home',
      views: {
        'content@base': {
          templateUrl: 'templates/pages/home.html',
          controller: 'HomeController as vm',
          data:{
            title: 'Home'
          }
        }
      }
    })
    .state('base.layout.assignatures', {
      abstract: true,
      views: {
        'content@base': {
          templateUrl: 'templates/pages/assignatures/assignatures.html',
          data:{
            title: 'Assignatures'
          }
        }
      }
    })
    .state('base.layout.assignatures.list', {
      url: '/assignatures',
      views: {
        'assignature-content': {
          templateUrl: 'templates/pages/assignatures/list.html',
          controller: 'AsignaturesController as vm',
          data:{
            title: 'Assignatures'
          }
        }
      }
    })
    .state('base.layout.assignatures.detail', {
      abstract: true,
      url: '/assignatures/:id',
      views: {
        'assignature-content': {
          templateUrl: 'templates/pages/assignatures/detail.html',
        }
      }
    })
    .state('base.layout.assignatures.detail.home', {
      url: '',
      views: {
        'tab-home': {
          templateUrl: 'templates/pages/assignatures/home.html',
          controller: 'AsignatureDetailController as vm',
        }
      }
    })
    .state('base.layout.assignatures.detail.schedule', {
      url: '/schedule',
      views: {
        'tab-schedule': {
          templateUrl: 'templates/pages/assignatures/schedule.html',
          controller: 'AsignaturesScheduleController as vm',
        }
      }
    })
    .state('base.layout.assignatures.detail.teachers', {
      url: '/teachers',
      views: {
        'tab-teachers': {
          templateUrl: 'templates/pages/assignatures/teachers.html',
          controller: 'AsignaturesTeachersController as vm',
        }
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
