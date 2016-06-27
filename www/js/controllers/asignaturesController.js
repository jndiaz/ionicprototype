//Asignatures controller
angular.module('starter.controllers')
  .controller('AsignaturesController', ['assignatureService', '$rootScope', function(assignatureService, $rootScope){
      var vm = this;
      vm.assignatures = [];
      assignatureService.getAssignatures().then(function(assignatures){
        vm.assignatures = assignatures;
        $rootScope.$broadcast('ajaxFinish');
      });
    }]);
