angular.module('starter.services')
  .service('feedbackService', ['newService','fileService', function(newService, fileService){

    this.login = function(user){
      return userAPIService.login(user);
    }

  }]);
