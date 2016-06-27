angular.module('starter.factories')
  .factory('Assignature', ['Image', function(Image){

      function Assignature(name, description, image, teachers, students){
        this.name = name;
        this.description = description;
        this.image = image;
        this.teachers = teachers;
        this.students = students;
      }

      Assignature.build = function(name, description, image, teachers, students){
        return new Assignature(name, description, Image.build(image.path), teachers, students);
      }

      return Assignature;

  }]);
