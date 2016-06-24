angular.module('starter.services')
  .service('userService', ['userAPIService', function(userAPIService){

    this.login = function(user){
      return userAPIService.login(user);
    }

  }]);
