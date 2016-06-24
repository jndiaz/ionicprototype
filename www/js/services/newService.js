angular.module('starter.services')
  .service('newService', ['newAPIService', '$q', 'New', function(newAPIService, $q, New){

    this.getNews = function(){
      return $q(function(resolve, reject){
        newAPIService.getNews().then(function(rawNews){
          resolve(rawNews.map(function(rawNew){
            return New.build(
              rawNew.title,
              rawNew.subtitle,
              rawNew.date,
              rawNew.subject,
              rawNew.author,
              rawNew.body,
              rawNew.image
            )
          }));
        }, function(error){
          reject(error);
        });
      })
    }

  }]);
