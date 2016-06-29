angular.module('starter.models')
  .factory('User', ['ImageResource', function(ImageResource){

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
      };

      User.build = function(rawUser){
        return parseRaw(rawUser);
      };

      User.buildSimplefied = function(rawUser){
        return parseRawSimplefied(rawUser);
      };

      function parseRaw(rawUser){
        return new User(
          rawUser.username,
          rawUser.password,
          ImageResource.build(rawUser.profileImage),
          rawUser.name,
          rawUser.lastname
        );
      };

      function parseRawSimplefied(rawUser){
        return new User(
          null,
          null,
          ImageResource.build(rawUser.profileImage),
          rawUser.name,
          rawUser.lastname
        );
      }

      return User;

  }]);
