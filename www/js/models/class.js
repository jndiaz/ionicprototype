angular.module('starter.models')
  .factory('Class', ['DAYS', 'ImageResource', function(DAYS, ImageResource){

      function Class(id, day, startTime, endTime, image){
        this.id = id;
        this.day = day;
        this.startTime = startTime;
        this.endTime = endTime;
        this.image = image;
      }

      Class.build = function(rawClass){
        return parseRaw(rawClass);
      };

      Class.buildSimplefied = function(rawClass){
        return parseRaw(rawClass);
      };

      function parseRaw(rawClass){
        return new Class(
          rawClass.id,
          rawClass.day,
          rawClass.startTime,
          rawClass.endTime,
          ImageResource.build({path: setImage(rawClass.day)})
        )
      };

      function parseRawSimplefied(rawClass){
        return new Class(
          rawClass.id,
          rawClass.name
        )
      };

      function setImage(day){
        switch (day) {
          case DAYS.ENGLISH.MONDAY:
            return 'img/placeholder/days/monday.jpg';
            break;
          case DAYS.ENGLISH.TUESDAY:
            return 'img/placeholder/days/tuesday.jpg';
            break;
          case DAYS.ENGLISH.WEDNESDAY:
            return 'img/placeholder/days/wednesday.jpg';
            break;
          case DAYS.ENGLISH.THURSDAY:
            return 'img/placeholder/days/tuesday.jpg';
            break;
          case DAYS.ENGLISH.FRIDAY:
            return 'img/placeholder/days/friday.jpg';
            break;
        }
      }

      return Class;

  }]);
