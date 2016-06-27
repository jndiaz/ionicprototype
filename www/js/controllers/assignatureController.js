//Asignature controller
angular.module('starter.controllers')
  .controller('AsignatureController', ['assignatureService', '$rootScope', '$stateParams', '$ionicNavBarDelegate',
  function(assignatureService, $rootScope, $stateParams, $ionicNavBarDelegate){
      var vm = this;
      vm.assignature = [];
      assignatureService.getAssignature($stateParams.id).then(function(assignature){
        vm.assignature = assignature;
        $rootScope.$broadcast('ajaxFinish');
        $ionicNavBarDelegate.title(assignature.name);
      });
    }]);
