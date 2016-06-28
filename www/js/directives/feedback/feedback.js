//Feedback directive
angular.module('starter.directives')
  .directive('feedback', function(){

      var controller = ['feedbackService', '$scope', '$rootScope', function(feedbackService, $scope, $rootScope){
        var vm = this;
        vm.feedbackList = [];
        vm.moreItems = true;
        if($scope.isGeneral){
          feedbackService.getFeedback().then(function(feedbackList){
            vm.feedbackList = feedbackList;
            $rootScope.$broadcast('ajaxFinish');
          })
        }

        vm.doRefresh = function(){
          if($scope.isGeneral){
            feedbackService.getNewFeedback().then(function(newFeedback){
              newFeedback.reverse().forEach(function(element){
                vm.feedbackList.unshift(element);
              });
              $rootScope.$broadcast('scroll.refreshComplete');
            }, function(error){
              $rootScope.$broadcast('scroll.refreshComplete');
            });
          }
        };

        vm.loadMore = function() {
          feedbackService.getOldFeedback().then(function(oldFeedback){
            oldFeedback.forEach(function(element){
              vm.feedbackList.push(element);
            })
            $scope.$broadcast('scroll.infiniteScrollComplete');
          }, function(error){
            vm.moreItems = false;
            $scope.$broadcast('scroll.infiniteScrollComplete');
          });
        }

      }];



      return {
        restrict: 'EA',
        templateUrl: 'js/directives/feedback/feedback.html',
        scope: {
          isGeneral: '@',
          isChild: '='
        },
        transclude: true,
        controller: controller,
        controllerAs: 'vm'
      }
    });
