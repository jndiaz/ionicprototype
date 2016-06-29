angular.module('starter.services')
  .service('commentAPIService', ['$http', 'fakeServer', function($http, fakeServer){

    //API comments endpoint
    var url = 'google.com';

    /* getCommentsByParent function
    *  params: parentId
    *  return: comments / null
    */
    this.getCommentsByParent = function(id){
      //Fake api call
      return fakeServer.getCommentsByParent(id);
    }

    /* getCommentsCounterByParent function
    *  params: parentId
    *  return: number / 0
    */
    this.getCommentsCounterByParent = function(id){
      //Fake api call
      return fakeServer.getCommentsCounterByParent(id);
    }

  }]);
