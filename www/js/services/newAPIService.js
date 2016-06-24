angular.module('starter.services')
  .service('newAPIService', ['$http', 'fakeServer', function($http, fakeServer){

    //API users endpoint
    var url = 'google.com';

    /* getItems function
    *  params: itemQuantity
    *  return: itemList / null
    */
    this.getNews = function(itemQuantity){
      //Fake api call
      return fakeServer.getNews();
    }

    /* refresh function
    *  params: lastItem
    *  return: newItems / null
    */
    this.getNewNews = function(lastItem){
      //Fake api call
      return fakeServer.getNewNews(lastItem);
    }

  }]);
