angular.module('starter.services')
  .service('userAPIService', ['$http', 'fakeServer', function($http, fakeServer){

    /* Login function
    *  params: user
    *  return: loggedUser / null
    */
    this.login = function(user){
      //Fake api call
      return fakeServer.login(user);
    }

  }]);
