(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
    .filter('percentage', percentage);

  /** @ngInject */
  function percentage() {
    return function(input){
        return input + '%';
    }
  }
})();
