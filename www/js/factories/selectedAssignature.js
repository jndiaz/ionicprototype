angular.module('starter.factories')
  .factory('selectedAssignature', function(){

      var selectedAssignature = {
        assignature: {}
      };

      selectedAssignature.setSelected = function(assignature){
        selectedAssignature.assignature = assignature;
      }

      return selectedAssignature;

  });
