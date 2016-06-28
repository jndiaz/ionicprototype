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

    /* getOldFiles function
    *  params: firstItem
    *  return: oldItems / null
    */
    this.getOldFiles = function(firstItem){
      //Fake api call
      return fakeServer.getOldFiles(firstItem);
    }

    /* getAssignatureRootFiles function
    *  params: assignature id
    *  return: root files and folders / null
    */
    this.getAssignatureRoot = function(id){
      //Fake api call
      return fakeServer.getAssignatureRoot(id);
    }

    /* getFolderContent function
    *  params: folder id
    *  return: folder files and folders / null
    */
    this.getFolderContent = function(id){
      //Fake api call
      return fakeServer.getFolderContent(id);
    }


  }]);
