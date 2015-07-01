(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $rootScope, $stateParams, $timeout, openFDAService) {
    var vm = this;


    var onResults = function(e, resultsFound){
      vm.resultsFound = resultsFound;
    };

    $scope.$on('results-found', onResults);
    $scope.$on('searchNotFound', onResults);

    var broadcastSearchText = function(_delay_){
      var delay = _delay_ || 0,
      sendText = function(){
        $rootScope.$broadcast('searchText',$stateParams.searchText);
        vm.resultsFound = 1;
      };
      $scope.$on('searchLoaded', function() {
        delay ? $timeout(sendText , delay) : sendText();
      });
    };

    if($stateParams.searchText){

        // Wait until all directives are loaded
        if (!openFDAService.resultsFound) {
          broadcastSearchText(1);
        }else{
          broadcastSearchText();
        }
    }
  }
})();