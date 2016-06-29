//Loader directive
angular.module('starter.directives')
  .directive('loader', function(){

      var controller = ['$scope', function($scope){
        var vm = this;
      }];

      return {
        restrict: 'EA',
        templateUrl: 'js/directives/loader/loader.html',
        scope: {
          isGeneral: '@'
        },
        controller: controller,
        controllerAs: 'vm'
      }
    });
