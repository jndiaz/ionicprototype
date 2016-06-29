//Comments directive
angular.module('starter.directives')
  .directive('commentsButton', ['$ionicPopup', 'commentService', function($ionicPopup, commentService){

      var controller = ['$scope', function($scope){
        var vm = this;

        getCommentsCounter();

        vm.openComments = function(){
          getComments();
          $ionicPopup.show({
            templateUrl: 'js/directives/commentsbutton/commentspopup.html',
            scope: $scope,
            cssClass: 'comments-popup',
            title: vm.commentString
          });
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
          commentService.getCommentsByParent($scope.parentId).then(function(comments){
            $scope.comments = comments;
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
