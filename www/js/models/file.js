angular.module('starter.factories')
  .factory('File', function(){

      function File(title, description, date, subject, author, path){
        this.title = title;
        this.description = subtitle;
        this.date = date;
        this.subject = subject;
        this.author = author;
        this.path = path;
      }

      File.prototype.isValid = function(){
        return true;
      }

      File.create = function(){
        return new File();
      }

      return File;

  });
