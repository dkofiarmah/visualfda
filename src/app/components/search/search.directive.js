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
  function search($scope, $rootScope, $state, SearchAutocompleteData, $timeout) {
    var vm = this;
    vm.input = '';

    vm.drugs = [];

    $scope.$on('searchNotFound',function(){
      vm.searchNotFound = true;
    });

    $scope.$on('searchText',function(e, searchText){
      vm.input = searchText;
      $rootScope.$broadcast('search', vm.input);
    });

    $scope.$watch('search.input', function(newInput){
      vm.searchNotFound = false;
      vm.drugs = SearchAutocompleteData.get({searchText:newInput});
    });

    $scope.$watch('search.loaded', function(){
      $scope.$emit('searchLoaded');
    });

    vm.submit = function(drug){
      console.log('drug',drug);
      if(drug){
        vm.input = drug.name;
      }
      $state.go('home',{searchText:vm.input});
    };

    vm.onFocus = function(focus){
      if(focus){
          vm.focus = focus;
      }else{
        $timeout(function(){
          vm.focus = focus;
        },333);
      }
    };

    vm.clearInput = function(){
      vm.input = '';
    }

  }

})();