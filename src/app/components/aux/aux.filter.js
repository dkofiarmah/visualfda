(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
    .filter('percentage', percentage)
    .filter('position', position);

    /** @ngInject */
    function percentage() {
      return function(input){
          return input.toFixed(2) + '%';
      }
    }

    /** @ngInject */
    function position() {
      return function(input){
          return (Number(input) + 1) + '.';
      }
    }
})();
