angular.module('starter.services')
  .service('feedbackService', ['newService','fileService', '$q', function(newService, fileService, $q){

    this.getFeedback = function(quantity){
      var deferred = $q.defer();
      settlePromises(newService.getNews(quantity).then(), fileService.getFiles(quantity).then())
        .then(function(results, errors){
          deferred.resolve(orderFeedBack(results[0], results[1]), errors)
        }, function(errors){
          deferred.reject(errors);
        });
      return deferred.promise;
    }

    this.getNewFeedback = function(lastItem){
      var news = [];
      var files = [];
      var deferred = $q.defer();
      settlePromises(newService.getNewNews(lastItem).then(), fileService.getNewFiles(lastItem).then())
        .then(function(results, errors){
          deferred.resolve(orderFeedBack(results[0], results[1]), errors)
        }, function(errors){
          deferred.reject(errors);
        });
      return deferred.promise;
    }

    function orderFeedBack(news, files){
      var feedback;

      news.forEach(function(element){
          element.isNew = true;
      });

      feedback = news.concat(files);

      return feedback.sort(function(a,b){
        return b.date - a.date;
      });
    }

    function settlePromises(newsPromise, filesPromise){
      var promisesQuantity = 2;
      var promisesEnded = 0;
      var news = [];
      var files = [];
      var errors = [];
      var deferred = $q.defer();

      newsPromise.then(function(results){
        news = results;
        promisesEnded++;
        complete();
      }, errorCallback);
      filesPromise.then(function(results){
        files = results
        promisesEnded++;
        complete();
      }, errorCallback);

      function errorCallback(error){
        promisesEnded++;
        errors.push(error);
        complete();
      }

      function complete(){
        if (promisesEnded == promisesQuantity){
          if(errors.length == 2){
            deferred.reject(errors);
          } else{
            deferred.resolve([news, files], errors);
          }
        }
      }

      return deferred.promise;

    }

  }]);
