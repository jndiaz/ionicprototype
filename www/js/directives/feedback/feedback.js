//Feedback directive
angular.module('starter.directives')
  .directive('feedback', function(){

      var controller = ['feedbackService', '$scope', '$rootScope', function(feedbackService, $scope, $rootScope){
        var vm = this;
        vm.feedbackList = [];
        if($scope.isGeneral){
          feedbackService.getFeedback().then(function(feedbackList){
            vm.feedbackList = feedbackList;
          })
        }
        $scope.$on('refreshFeedback', function(){
          if($scope.isGeneral){
            feedbackService.getNewFeedback().then(function(feedbackList){
              vm.feedbackList = feedbackList;
              $rootScope.$broadcast('scroll.refreshComplete');
            }, function(error){
              $rootScope.$broadcast('scroll.refreshComplete');
            });
          }

        })
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
