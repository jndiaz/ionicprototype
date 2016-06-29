angular.module('starter.models')
  .factory('New', ['Utils', 'ImageResource', 'User','Assignature',  function(Utils, ImageResource, User, Assignature){

      function New(id, title, subtitle, date, assignature, author, body, image){
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.date = date;
        this.assignature = assignature;
        this.author = author;
        this.body = body;
        this.image = image;
      }

      New.prototype.isValid = function(){
        return true;
      }

      New.prototype.dateInEnglish = function(){
        return {
          month: Utils.getLongMonthNameByLanguage(this.date, 'en-us')
        }
      }

      New.create = function(){
        return new New();
      }

      New.build = function(rawNew){
        return parseRaw(rawNew);
      }

      function parseRaw(rawNew){
          return new New(
            rawNew.id,
            rawNew.title,
            rawNew.subtitle,
            rawNew.date,
            Assignature.buildSimplefied(rawNew.assignature),
            User.buildSimplefied(rawNew.author),
            rawNew.body,
            ImageResource.build(rawNew.image)
          );
      }

      return New;

  }]);
