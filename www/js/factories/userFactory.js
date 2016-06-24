angular.module('starter.factories')
  .factory('User', function(){

      function User(username, password){
        this.username = username;
        this.password = password;
      }

      User.prototype.isValid = function(){
        if (this.username != "" && this.password != "" && this.username != undefined && this.password != undefined){
          return true;
        } else {
          return false;
        }
      }

      User.create = function(){
        return new User();
      }

      return User;

  });
