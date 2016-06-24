angular.module('starter.services')
  .service('feedbackService', ['newService','fileService', '$q', function(newService, fileService, $q){

    this.getFeedback = function(quantity){
      var news = [];
      var files = [];
      var deferred = $q.defer();
      settlePromises([newService.getNews(quantity).then(), fileService.getFiles(quantity).then()])
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
      settlePromises([newService.getNewNews(lastItem).then(), fileService.getNewFiles(lastItem).then()])
        .then(function(results, errors){
          deferred.resolve(orderFeedBack(results[0], results[1]), errors)
        }, function(errors){
          deferred.reject(errors);
        });
      return deferred.promise;
    }

    function orderFeedBack(news, files){
      var feedback;

      if(news != null){
        news.forEach(function(element){
            element.isNew = true;
        });
      }

      if(news!= null && files!= null){
        feedback = news.concat(files);
      } else if (news != null){
        feedback = news;
      } else {
        feedback = files;
      }

      return feedback.sort(function(a,b){
        return b.date - a.date;
      })
    }

    function settlePromises(promises){
      var promisesQuantity = promises.length;
      var promisesEnded = 0;
      var results = [];
      var errors = [];
      var deferred = $q.defer();
      promises.forEach(function(promise){
        promise.then(function(result){
          results.push(result);
          promisesEnded++;
          complete();
        }, function(error){
          errors.push(error);
          promisesEnded++;
          complete();
        })
      });

      function complete(){
        if (promisesEnded == promisesQuantity){
          if(results.length == 0){
            deferred.reject(errors);
          } else{
            deferred.resolve(results, errors);
          }
        }
      }

      return deferred.promise;

    }

  }]);
