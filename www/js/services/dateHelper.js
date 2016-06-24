angular.module('starter.services')
  .service('dateHelper', function(){

    this.getLongMonthNameByLanguage = function(date, lang){
      return date.toLocaleString(lang, {month: 'long'})
    }

    this.getShortMonthNameByLanguage = function(date, lang){
      return date.toLocaleString(lang, {month: 'short'})
    }

  });
