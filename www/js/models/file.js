angular.module('starter.factories')
  .factory('File', ['User', 'dateHelper', function(User, dateHelper){

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
      }

      File.prototype.dateInEnglish = function(){
        return {
          month: dateHelper.getLongMonthNameByLanguage(this.date, 'en-us')
        }
      }

      File.create = function(){
        return new File();
      }

      File.build = function(id, title, description, date, subject, author, path){
        return new File(id, title, description, date, subject,
          User.buildSimplefied(author.name, author.lastname, author.profileImage), path);
      }

      return File;

  }]);
