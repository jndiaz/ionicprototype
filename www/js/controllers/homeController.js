//Home controller
angular.module('starter.controllers')
  .controller('HomeController', ['feedbackService','$rootScope', function(feedbackService, $rootScope){
      var vm = this;
      vm.doRefresh = function(){
        $rootScope.$broadcast('refreshFeedback');
      }
    }]);
