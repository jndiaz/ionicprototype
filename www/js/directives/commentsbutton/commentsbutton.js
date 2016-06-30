//Comments directive
angular.module('starter.directives')
  .directive('commentsButton', ['$ionicPopup', 'commentService',
  function($ionicPopup, commentService){

      var controller = ['$scope', '$timeout', function($scope, $timeout){
        var vm = this;

        getCommentsCounter();

        vm.openComments = function(){
          getComments();
          var popUp = $ionicPopup.show({
            templateUrl: 'js/directives/commentsbutton/commentspopup.html',
            scope: $scope,
            cssClass: 'comments-popup',
            title: vm.commentString,
            buttons: [
              {
                text: '<i ng-click="vm.closeComment()" class="ion-android-close icon close"></i>',
                type: 'close-btn',
                onTap: function(e){
                  popUp.close();
                }
              }
            ]
          });
          return false;
        }

        vm.closeComment = function(){
          popUp.close();
        }

        function getCommentsCounter(){
          commentService.getCommentsCounterByParent($scope.parentId).then(function(commentsCounter){
            vm.commentsCounter = commentsCounter;
            setCommentString();
          })
        }

        function setCommentString(){
          if (vm.commentsCounter == 0) vm.commentString = "No comments";
          if (vm.commentsCounter == 1) vm.commentString = "1 comment";
          if (vm.commentsCounter > 1) vm.commentString = vm.commentsCounter + " comments";
        }

        function getComments(){
          vm.loadingComments = true;
          $scope.$broadcast('ajaxStart');
          commentService.getCommentsByParent($scope.parentId).then(function(comments){
            $scope.$broadcast('ajaxFinish');
            $scope.comments = comments;
            $timeout(function(){
              vm.loadingComments = false;
            }, 100);
          })
        }

      }];

      return {
        restrict: 'EA',
        templateUrl: 'js/directives/commentsbutton/commentsbutton.html',
        scope: {
          parentId: '='
        },
        controller: controller,
        controllerAs: 'vm'
      }
    }]);
