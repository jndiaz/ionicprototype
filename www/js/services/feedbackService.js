angular.module('starter.services')
  .service('feedbackService', ['userAPIService', function(userAPIService){

    this.login = function(user){
      return userAPIService.login(user);
    }

  }]);
