/* global angular */
'use strict';

angular.module('app').directive('validateFname', function validateFname() {

  function link($scope, $element, $attrs, $ctrl) {
    $ctrl.$validators.fname = function (modelValue, viewValue) {
      var value = modelValue || viewValue;
      return (value !== 'Sandeep');
    };
  }

  return {
    require: 'ngModel',
    link: link
  };
  
});