angular.module('starter.models')
  .factory('Folder', ['User', 'Utils', function(User, Utils){

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
          month: Utils.getLongMonthNameByLanguage(this.date, 'en-us')
        }
      }

      Folder.create = function(){
        return new Folder();
      }

      Folder.build = function(rawFolder){
        return parseRaw(rawFolder);
      }

      function parseRaw(rawFolder){
        return new Folder(
          rawFolder.id,
          rawFolder.title,
          rawFolder.date,
          rawFolder.subject,
          User.buildSimplefied(rawFolder.author),
          rawFolder.path,
          rawFolder.content
        );
      };

      return Folder;

  }]);
