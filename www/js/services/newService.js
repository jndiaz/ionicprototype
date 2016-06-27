angular.module('starter.services')
  .service('newService', ['newAPIService', '$q', 'New', function(newAPIService, $q, New){

    this.getNews = function(quantity){
      return $q(function(resolve, reject){
        newAPIService.getNews(quantity).then(function(rawNews){
          resolve(rawNews.map(parseRaw));
        }, function(error){
          reject(error);
        });
      })
    };

    this.getNewNews = function(lastItem){
      return $q(function(resolve, reject){
        newAPIService.getNewNews(lastItem).then(function(rawNews){
          resolve(rawNews.map(parseRaw));
        }, function(error){
          reject(error);
        });
      })
    };

    this.getOldNews = function(firstItem){
      return $q(function(resolve, reject){
        newAPIService.getOldNews(firstItem).then(function(rawNews){
          resolve(rawNews.map(parseRaw));
        }, function(error){
          reject(error);
        });
      })
    };

    function parseRaw(rawNew){
        return New.build(
          rawNew.title,
          rawNew.subtitle,
          rawNew.date,
          rawNew.subject,
          rawNew.author,
          rawNew.body,
          rawNew.image
        );
    }

  }]);
