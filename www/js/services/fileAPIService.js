angular.module('starter.services')
  .service('fileAPIService', ['$http', 'fakeServer', function($http, fakeServer){

    //API users endpoint
    var url = 'google.com';

    /* getItems function
    *  params: itemQuantity
    *  return: itemList / null
    */
    this.getFiles = function(itemQuantity){
      //Fake api call
      return fakeServer.getFiles();
    }

    /* refresh function
    *  params: lastItem
    *  return: newItems / null
    */
    this.getNewFiles = function(lastItem){
      //Fake api call
      return fakeServer.getNewFiles(lastItem);
    }

  }]);
