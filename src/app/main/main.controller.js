(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $rootScope, $stateParams) {
    var vm = this;

    vm.resultsFound = 0;

    $scope.$on('results-found', function(e, resultsFound){
      vm.resultsFound = resultsFound;
    });

    if($stateParams.searchText){
        // Wait until all directives are loaded
        $scope.$on('searchLoaded', function() {
            $rootScope.$broadcast('searchText',$stateParams.searchText);
        });
    }
  }
})();