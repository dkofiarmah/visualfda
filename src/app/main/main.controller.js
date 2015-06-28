(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $rootScope, $stateParams, $timeout) {
    if($stateParams.searchText){
        // Wait until all directives are loaded
        $scope.$on('searchLoaded', function() {
            $rootScope.$broadcast('searchText',$stateParams.searchText);
        });
    }
  }
})();