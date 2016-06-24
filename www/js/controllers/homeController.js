//Home controller
angular.module('starter.controllers')
  .controller('HomeController', ['feedbackService', function(feedbackService){
      var vm = this;
      vm.feedbackList = [];
      feedbackService.getFeedback().then(function(feedbackList){
        vm.feedbackList = feedbackList;
      })
    }]);
