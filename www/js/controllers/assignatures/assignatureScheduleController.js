//Asignature schedule controller
angular.module('starter.controllers')
  .controller('AsignaturesScheduleController', ['courseService','selectedAssignature', '$rootScope', 
  function(courseService, selectedAssignature, $rootScope){
      var vm = this;
      vm.courses = [];
      courseService.getCoursesFromAssignature(selectedAssignature.assignature.id).then(function(courses){
        vm.courses = courses;
        $rootScope.$broadcast('ajaxFinish');
      })
    }]);
