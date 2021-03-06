angular.module('starter.services')
  .service('newService', ['newAPIService', '$q', 'New', function(newAPIService, $q, New){

    this.getNews = function(quantity){
      return $q(function(resolve, reject){
        newAPIService.getNews(quantity).then(function(rawNews){
          resolve(rawNews.map(New.build));
        }, function(error){
          reject(error);
        });
      })
    };

    this.getNewNews = function(lastItem){
      return $q(function(resolve, reject){
        newAPIService.getNewNews(lastItem).then(function(rawNews){
          resolve(rawNews.map(New.build));
        }, function(error){
          reject(error);
        });
      })
    };

    this.getOldNews = function(firstItem){
      return $q(function(resolve, reject){
        newAPIService.getOldNews(firstItem).then(function(rawNews){
          resolve(rawNews.map(New.build));
        }, function(error){
          reject(error);
        });
      })
    };

  }]);
