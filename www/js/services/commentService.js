angular.module('starter.services')
  .service('commentService', ['commentAPIService', '$q', 'Comment', function(commentAPIService, $q, Comment){

    this.getCommentsByParent = function(id){
      return $q(function(resolve, reject){
        commentAPIService.getCommentsByParent(id).then(function(rawComments){
          resolve(rawComments.map(Comment.build));
        }, function(error){
          reject(error);
        });
      })
    };

    this.getCommentsCounterByParent = function(id){
      return $q(function(resolve, reject){
        commentAPIService.getCommentsCounterByParent(id).then(function(commentsCounter){
          resolve(commentsCounter);
        }, function(error){
          reject(error);
        });
      })
    };

  }]);
