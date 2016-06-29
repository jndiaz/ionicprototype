angular.module('starter.models')
  .factory('ImageResource', function(){

      function ImageResource(path){
        this.path = path;
      }

      ImageResource.build = function(rawImageResource){
        return parseRaw(rawImageResource);
      }

      function parseRaw(rawImageResource){
        return new ImageResource(rawImageResource.path)
      }

      return ImageResource;

  });
