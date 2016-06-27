//Feedback directive
angular.module('starter.directives')
  .directive('ajaxContent', function(){

      var controller = ['$scope', function($scope, $rootScope){
        var vm = this;
        vm.isLoading = true;
        $scope.$on('ajaxFinish', function(){
            vm.isLoading = false;
        });

      }];

      return {
        restrict: 'EA',
        templateUrl: 'js/directives/ajaxcontent/ajaxcontent.html',
        scope: {
          isGeneral: '@'
        },
        transclude: true,
        controller: controller,
        controllerAs: 'vm'
      }
    });
