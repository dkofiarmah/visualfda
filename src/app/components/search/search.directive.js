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
  function search($scope, $rootScope, $state) {
    var vm = this;
    vm.input = '';

    $scope.$on('searchNotFound',function(){
      vm.searchNotFound = true;
    });

    $scope.$on('searchText',function(e, searchText){
      vm.input = searchText;
      $rootScope.$broadcast('search', vm.input);
    });

    $scope.$watch('search.input', function(){
      vm.searchNotFound = false;
    });

    $scope.$watch('search.loaded', function(){
      $scope.$emit('searchLoaded');
    });

    vm.submit = function(){
      $state.go('home',{searchText:vm.input});
    };
  }

})();