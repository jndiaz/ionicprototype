//Home controller
angular.module('starter.controllers')
  .controller('HomeController', ['newService', function(newService){
      var vm = this;
      vm.news = []
      newService.getNews().then(function(news){
        vm.news = news;
      })
    }]);
