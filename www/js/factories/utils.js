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

      return {
        splitIntoColumns: splitIntoColumns,
        getLongMonthNameByLanguage: getLongMonthNameByLanguage,
        getShortMonthNameByLanguage: getShortMonthNameByLanguage
      };

  });
