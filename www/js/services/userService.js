angular.module('starter.services')
  .service('userService', ['userAPIService', 'User', '$q', function(userAPIService, User, $q){

    this.loggedUser = null;

    this.login = function(user){
      var self = this;
      return $q(function(resolve, reject){
        userAPIService.login(user).then(function(rawLoggedUser){
          self.loggedUser = User.build(rawLoggedUser);
          resolve(self.loggedUser);
        }, function(error){
          reject(error);
        });
      })
    };

    this.getLoggedUser = function(){
      return this.loggedUser;
    };

  }]);
