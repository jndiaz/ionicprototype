//Feedback directive
angular.module('starter.directives')
  .directive('feedback', function(){

      var controller = ['feedbackService', '$scope', function(feedbackService, $scope){
        var vm = this;
        vm.feedbackList = [];
        if($scope.isGeneral){
          feedbackService.getFeedback().then(function(feedbackList){
            vm.feedbackList = feedbackList;
          })  
        }
      }];

      return {
        restrict: 'EA',
        templateUrl: 'js/directives/feedback/feedback.html',
        scope: {
          isGeneral: '@'
        },
        controller: controller,
        controllerAs: 'vm'
      }
    });
