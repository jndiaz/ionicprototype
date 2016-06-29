angular.module('starter.services')
  .service('courseService', ['courseAPIService', '$q', 'Course', function(courseAPIService, $q, Course){

    this.getCoursesFromAssignature = function(id){
      return $q(function(resolve, reject){
        courseAPIService.getCoursesFromAssignature(id).then(function(rawCourses){
          resolve(rawCourses.map(Course.build));
        }, function(error){
          reject(error);
        });
      })
    };

  }]);
