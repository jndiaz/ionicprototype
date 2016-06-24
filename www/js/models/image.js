angular.module('starter.factories')
  .factory('Image', function(){

      function Image(path){
        this.path = path;
      }

      Image.build = function(path){
        return new Image(path);
      }

      return Image;

  });
