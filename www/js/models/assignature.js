angular.module('starter.models')
  .factory('Assignature', ['ImageResource', function(ImageResource){

      function Assignature(id, name, description, image, teachers){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.teachers = teachers;
      }

      Assignature.build = function(rawAssignature){
        return parseRaw(rawAssignature);
      }

      Assignature.buildSimplefied = function(rawAssignature){
        return parseRawSimplefied(rawAssignature);
      }

      return Assignature;

      function parseRaw(rawAssignature){
        return new Assignature(
          rawAssignature.id,
          rawAssignature.name,
          rawAssignature.description,
          ImageResource.build(rawAssignature.image),
          rawAssignature.teachers,
          rawAssignature.students
        );
      }

      function parseRawSimplefied(rawAssignature){
        return new Assignature(
          rawAssignature.id,
          rawAssignature.name
        )
      }

  }]);
