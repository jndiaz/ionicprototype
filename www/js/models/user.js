angular.module('starter.factories')
  .factory('User', ['Image', function(Image){

      function User(username, password, profileImage, name, lastname){
        this.username = username;
        this.password = password;
        this.profileImage = profileImage;
        this.name = name;
        this.lastname = lastname;
      }

      User.prototype.isValid = function(){
        if (this.username != "" && this.password != "" && this.username != undefined && this.password != undefined){
          return true;
        } else {
          return false;
        }
      }

      User.prototype.getFullName = function(){
        return this.name + ' ' + this.lastname;
      }

      User.create = function(){
        return new User();
      }

      User.build = function(username, password, profileImage, name, lastname){
        return new User(username, password, Image.build(profileImage), name, lastname);
      }

      return User;

  }]);
