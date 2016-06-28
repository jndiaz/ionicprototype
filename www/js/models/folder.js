angular.module('starter.factories')
  .factory('Folder', ['User', 'dateHelper', function(User, dateHelper){

      function Folder(id, title, description, date, subject, author, path, content){
        this.id = id;
        this.title = title;
        this.date = date;
        this.subject = subject;
        this.author = author;
        this.path = path;
        this.content = content;
      }

      Folder.prototype.isValid = function(){
        return true;
      }

      Folder.prototype.dateInEnglish = function(){
        return {
          month: dateHelper.getLongMonthNameByLanguage(this.date, 'en-us')
        }
      }

      Folder.create = function(){
        return new Folder();
      }

      Folder.build = function(id, title, date, subject, author, path, content){
        return new Folder(id, title, date, subject,
          User.buildSimplefied(author.name, author.lastname, author.profileImage), path, content);
      }

      return Folder;

  }]);
