(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(openFDAService) {
    var main = this;

    openFDAService.status().$promise.then(function(data){
      console.log(data);
    });
  }
})();
