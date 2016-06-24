//Feedback directive
angular.module('starter.directives')
  .directive('feedback', function(){
      return {
        restrict: 'EA',
        templateUrl: 'js/directives/feedback/feedback.html',
        scope: {
          newsList: '=',
          fileList: '='
        }
      }
    });
