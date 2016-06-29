angular.module('starter.services')
  .service('courseAPIService', ['$http', 'fakeServer', function($http, fakeServer){

    //API users endpoint
    var url = 'google.com';

    /* getCoursesFromAssignature function
    *  params: assignature id
    *  return: courses / null
    */
    this.getCoursesFromAssignature = function(id){
      //Fake api call
      return fakeServer.getCoursesFromAssignature(id);
    }

  }]);
