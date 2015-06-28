(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $stateParams, $timeout) {
    if($stateParams.searchText){
        console.log('$stateParams.searchText', $stateParams.searchText);
        // Wait until all directives are loaded
        $timeout(function() {
            $rootScope.$broadcast('searchText',$stateParams.searchText);
        },333);
    }
  }
})();