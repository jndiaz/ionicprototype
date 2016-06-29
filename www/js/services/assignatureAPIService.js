angular.module('starter.services')
  .service('assignatureAPIService', ['$http', 'fakeServer', function($http, fakeServer){

    //API users endpoint
    var url = 'google.com';

    /* getAssignatures function
    *  params: quantity
    *  return: asignatures / null
    */
    this.getAssignatures = function(quantity){
      //Fake api call
      return fakeServer.getAssignatures();
    }

    /* getAssignature function
    *  params: assignature id
    *  return: asignature / null
    */
    this.getAssignature = function(id){
      //Fake api call
      return fakeServer.getAssignature(id);
    }

    /* getAssignatureTeachers function
    *  params: assignature id
    *  return: teachers / null
    */
    this.getAssignatureTeachers = function(id){
      //Fake api call
      return fakeServer.getAssignatureTeachers(id);
    }

  }]);
