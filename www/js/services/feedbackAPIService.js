angular.module('starter.services')
  .service('feedbackAPIService', ['$http', '$q', function($http, $q){

    //API users endpoint
    var url = 'google.com';

    var items = [
      {
        title: 'asd';
      }
    ];

    /* getItems function
    *  params: itemQuantity
    *  return: itemList / null
    */
    this.getItems = function(itemQuantity){
      //Fake api call
      return $q(function(resolve, reject){
        setTimeout(function(){
          //Hardcoded
          if (true){
            resolve(items);
          }else {
            reject(null);
          }
        }, 1000)
      })
    }

    /* refresh function
    *  params: lastItem
    *  return: newItems / null
    */
    this.refresh = function(lastItem){
      //Fake api call
      return $q(function(resolve, reject){
        setTimeout(function(){
          //Hardcoded; if random < 0.5 new items exists, otherwise not.
          if (Math.random() < 0.5){
            resolve(items);
          }else {
            reject(null);
          }
        }, 1000)
      })
    }

  }]);
