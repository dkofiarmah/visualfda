// Search input
(function(){
  'use strict';
  angular.module('openFDA')
    .directive('alSearch', alSearch);

  /** @ngInject */
  function alSearch(){
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/search/search.html',
      controller: search,
      controllerAs: 'search'
    };
    return directive;
  }

  /** @ngInject */
  function search(openFDADrugsEvents, $scope) {
    var vm = this;
  }

})();