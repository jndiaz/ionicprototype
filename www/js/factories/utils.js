angular.module('starter.factories')
  .factory('Utils', function(){

      var splitIntoColumns = function(array, columns){
        var matrix = [];
        for(i = 0; i < columns; i++){
          matrix[i] = [];
        }
        var j = 0;
        for(i = 0; i < array.length; i++){
          matrix[j].push(array[i]);
          j++;
          if (j == columns) j = 0;
        }
        return matrix;
      }

      var getLongMonthNameByLanguage = function(date, lang){
        return date.toLocaleString(lang, {month: 'long'})
      }

      var getShortMonthNameByLanguage = function(date, lang){
        return date.toLocaleString(lang, {month: 'short'})
      }

      var getTimeSince = function(date){

        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = Math.floor(seconds / 31536000);

        if (interval >= 1) {
          if(interval == 1) return "a year ago";
          return interval + " years ago";
        }

        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
          if(interval == 1) return "a month ago";
          return interval + " months ago";
        }

        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
          if(interval == 1) return "a day ago";
          return interval + " days ago";
        }

        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
          if(interval == 1) return "an hour ago";
          return interval + " hours ago";
        }

        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
          if(interval == 1) return "a minute ago";
          return interval + " minutes ago";
        }

        return Math.floor(seconds) + " seconds ago";

      }

      return {
        splitIntoColumns: splitIntoColumns,
        getLongMonthNameByLanguage: getLongMonthNameByLanguage,
        getShortMonthNameByLanguage: getShortMonthNameByLanguage,
        getTimeSince: getTimeSince
      };

  });
