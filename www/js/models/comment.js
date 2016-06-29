angular.module('starter.models')
  .factory('Comment', ['User', function(User){

      function Comment(id, parentId, author, content, createdAt){
        this.id = id;
        this.parentId = parentId;
        this.author = author;
        this.content = content;
        this.createdAt = createdAt;
      }

      Comment.build = function(rawComment){
        return parseRaw(rawComment);
      }

      function parseRaw(rawComment){
        return new Comment(
          rawComment.id,
          rawComment.parentId,
          User.buildSimplefied(rawComment.author),
          rawComment.content,
          rawComment.createdAt
        );
      }

      return Comment;

  }]);
