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
  function search($scope, $rootScope, $state, openFDADrugsEvents, SearchAutocompleteData) {
    var vm = this;

    vm.input;

    $scope.$on('searchNotFound',function(){
      vm.message = 'Oops! We don\'t have that drug. Check your spelling and try agan';
    });

    $scope.$on('searchText',function(e, searchText){
      vm.input = searchText;
      $rootScope.$broadcast('search', vm.input);
    });

    $scope.$watch('search.input', function(){
      vm.message = '';
    });

    $scope.$watch('search.loaded', function(){
      $scope.$emit('searchLoaded');
    });

    vm.submit = function(){
      $state.go('home',{searchText:vm.input});
    };
  }

})();