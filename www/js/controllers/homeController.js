//Home controller
angular.module('starter.controllers')
  .controller('HomeController', ['newService', 'fileService', function(newService, fileService){
      var vm = this;
      vm.news = [];
      vm.files = [];
      newService.getNews().then(function(news){
        vm.news = news;
      })
      fileService.getFiles().then(function(files){
        vm.files = files;
      })
    }]);
