(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $rootScope, $stateParams) {
    var vm = this;


    var onResults = function(e, resultsFound){
      vm.resultsFound = resultsFound;
    };

    $scope.$on('results-found', onResults);
    $scope.$on('searchNotFound', onResults);

    if($stateParams.searchText){
        // Wait until all directives are loaded
        $scope.$on('searchLoaded', function() {
            $rootScope.$broadcast('searchText',$stateParams.searchText);
            vm.resultsFound = 1;
        });
    }
  }
})();