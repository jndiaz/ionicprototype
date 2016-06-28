//Asignature detail controller
angular.module('starter.controllers')
  .controller('AsignatureDetailController', ['assignatureService', '$rootScope', '$stateParams',
  '$ionicNavBarDelegate', 'selectedAssignature',
  function(assignatureService, $rootScope, $stateParams, $ionicNavBarDelegate, selectedAssignature){
      var vm = this;
      vm.assignature = [];
      assignatureService.getAssignature($stateParams.id).then(function(assignature){
        vm.assignature = assignature;
        selectedAssignature.setSelected(assignature);
        $rootScope.$broadcast('ajaxFinish');
        $ionicNavBarDelegate.title(assignature.name);
      });
    }]);
