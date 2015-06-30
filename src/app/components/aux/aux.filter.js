(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
    .filter('percentage', percentage)
    .filter('capitalize', capitalize)
    .filter('position', position);

    /** @ngInject */
    function percentage() {
      return function(input, total){
          var _percentage = Number(input) / Number(total) * 100;
          return _percentage.toFixed(2) + '%';
      };
    }

    /** @ngInject */
    function position() {
      return function(input){
          return (Number(input) + 1) + '.';
      };
    }

    /** @ngInject */
    function capitalize() {
      return function(input){
          input = input.toLowerCase();
          return input.charAt(0).toUpperCase() + input.slice(1);
      };
    }
})();
