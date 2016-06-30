angular.module('starter.config')
.config(function (ionicTimePickerProvider) {
    ionicTimePickerProvider.configTimePicker({
      inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
      format: 24,
      step: 1,
      setLabel: 'Set',
      closeLabel: 'Close'
    });
  })
 
