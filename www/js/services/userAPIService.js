angular.module('starter.services')
  .service('userAPIService', ['$http', '$q', function($http, $q){

    //API users endpoint
    var url = 'google.com';

    /* Login function
    *  params: user
    *  return: loggedUser / null
    */
    this.login = function(user){
      //Fake api call
      return $q(function(resolve, reject){
        setTimeout(function(){
          if (user.username == 'admin' && user.username == 'admin'){
            resolve(user);
          }else {
            reject(null);
          }
        }, 1000)
      })
    }

  }]);
