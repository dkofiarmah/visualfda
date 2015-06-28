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
  function search($scope, $rootScope, openFDADrugsEvents, SearchAutocompleteData) {
    var vm = this;

    vm.input;

    $scope.$on('searchNotFound',function(){
      vm.message = 'Oops! We don\'t have that drug. Check your spelling and try agan';
    });

    $scope.$on('searchText',function(e, searchText){
      vm.input = searchText;
      vm.submit();
    });

    $scope.$watch('search.input', function(){
      vm.message = '';
    });

    vm.submit = function(){
      $rootScope.$broadcast('search', vm.input);
    };
  }

})();