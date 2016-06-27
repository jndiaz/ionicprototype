angular.module('starter.factories')
  .factory('Assignature', ['Image', function(Image){

      function Assignature(id, name, description, image, teachers, students){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.teachers = teachers;
        this.students = students;
      }

      Assignature.build = function(id, name, description, image, teachers, students){
        return new Assignature(id, name, description, Image.build(image.path), teachers, students);
      }

      return Assignature;

  }]);
