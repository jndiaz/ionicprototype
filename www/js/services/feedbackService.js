angular.module('starter.services')
  .service('feedbackService', ['newService','fileService', '$q', function(newService, fileService, $q){

    this.getFeedback = function(quantity){
      var news = [];
      var files = [];
      var deferred = $q.defer();
      $q.all([newService.getNews().then(), fileService.getFiles().then()]).then(function(result){
        news = result[0];
        files = result[1];
        deferred.resolve(orderFeedBack(news, files));
      });
      return deferred.promise;
    }

    function orderFeedBack(news, files){
      news.forEach(function(element){
          element.isNew = true;
      });
      var feedback = news.concat(files);
      return feedback.sort(function(a,b){
        return b.date - a.date;
      })
    }

  }]);
