angular.module('starter.models')
  .factory('Course', ['User', 'Class', function(User, Class){

      function Course(id, name, classes, teachers, students){
        this.id = id;
        this.name = name;
        this.classes = classes;
        this.teachers = teachers;
        this.students = students;
      }

      Course.build = function(rawCourse){
        return parseRaw(rawCourse);
      }

      Course.buildSimplefied = function(rawCourse){
        return parseRawSimplefied(rawCourse);
      }

      function parseRaw(rawCourse){
        return new Course(
          rawCourse.id,
          rawCourse.name,
          rawCourse.classes.map(Class.build),
          rawCourse.teachers.map(User.buildSimplefied),
          rawCourse.students.map(User.buildSimplefied)
        )
      }

      function parseRawSimplefied(rawCourse){
        return new Course(
          rawCourse.id,
          rawCourse.name
        )
      }

      return Course;

  }]);
