//Asignature teachers controller
angular.module('starter.controllers')
  .controller('AsignaturesTeachersController', ['assignatureService', '$rootScope', 'selectedAssignature',
  function(assignatureService, $rootScope, selectedAssignature){
      var vm = this;
      vm.teachers = [];
      assignatureService.getAssignatureTeachers(selectedAssignature.assignature.id).then(function(teachers){
          vm.teachers = teachers;
          $rootScope.$broadcast('ajaxFinish');
      })
    }]);
