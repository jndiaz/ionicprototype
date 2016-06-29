angular.module('starter.models')
  .factory('File', ['User', 'Utils', function(User, Utils){

      function File(id, title, description, date, subject, author, path){
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.subject = subject;
        this.author = author;
        this.path = path;
      }

      File.prototype.isValid = function(){
        return true;
      };

      File.prototype.dateInEnglish = function(){
        return {
          month: Utils.getLongMonthNameByLanguage(this.date, 'en-us')
        }
      };

      File.create = function(){
        return new File();
      };

      File.build = function(rawFile){
        return parseRaw(rawFile);
      };

      function parseRaw(rawFile){
        return new File(
          rawFile.id,
          rawFile.title,
          rawFile.description,
          rawFile.date,
          rawFile.subject,
          User.buildSimplefied(rawFile.author),
          rawFile.path
        );
      };

      return File;

  }]);
