angular.module('starter.services')
  .service('newService', ['newAPIService', '$q', 'New', function(newAPIService, $q, New){

    this.getNews = function(quantity){
      return $q(function(resolve, reject){
        newAPIService.getNews(quantity).then(function(rawNews){
          resolve(parseRaw(rawNews));
        }, function(error){
          reject(error);
        });
      })
    };

    this.getNewNews = function(lastItem){
      return $q(function(resolve, reject){
        newAPIService.getNewNews(lastItem).then(function(rawNews){
          resolve(parseRaw(rawNews));
        }, function(error){
          reject(error);
        });
      })
    };

    function parseRaw(rawNews){
      return rawNews.map(function(rawNew){
        return New.build(
          rawNew.title,
          rawNew.subtitle,
          rawNew.date,
          rawNew.subject,
          rawNew.author,
          rawNew.body,
          rawNew.image
        )
      });
    }

  }]);
