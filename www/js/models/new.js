angular.module('starter.factories')
  .factory('New', ['dateHelper', 'Image', 'User', function(dateHelper, Image, User){

      function New(title, subtitle, date, subject, author, body, image){
        this.title = title;
        this.subtitle = subtitle;
        this.date = date;
        this.subject = subject;
        this.author = author;
        this.body = body;
        this.image = image;
      }

      New.prototype.isValid = function(){
        return true;
      }

      New.prototype.dateInEnglish = function(){
        return {
          month: dateHelper.getLongMonthNameByLanguage(this.date, 'en-us')
        }
      }

      New.create = function(){
        return new New();
      }

      New.build = function(title, subtitle, date, subject, author, body, image){
        return new New(title,
          subtitle, date, subject,
          User.buildSimplefied(author.name, author.lastname, author.profileImage),
          body, Image.build(image.path));
      }

      return New;

  }]);
