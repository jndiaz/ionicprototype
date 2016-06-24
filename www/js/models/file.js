angular.module('starter.factories')
  .factory('File', ['User', 'dateHelper', function(User, dateHelper){

      function File(title, description, date, subject, author, path){
        this.title = title;
        this.description = description;
        this.date = date;
        this.subject = subject;
        this.author = author;
        this.path = path;
      }

      File.prototype.isValid = function(){
        return true;
      }

      File.prototype.dateInEnglish = function(){
        return {
          month: dateHelper.getLongMonthNameByLanguage(this.date, 'en-us')
        }
      }

      File.create = function(){
        return new File();
      }

      File.build = function(title, description, date, subject, author, path){
        return new File(title, description, date, subject,
          User.buildSimplefied(author.name, author.lastname, author.profileImage), path);
      }

      return File;

  }]);
