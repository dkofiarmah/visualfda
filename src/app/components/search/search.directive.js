  // Search input
(function(){
  'use strict';
  angular.module('fdaAppPrototype')
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

    vm.getDrugNames = true;
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
      if(vm.getDrugNames && newInput){
        vm.drugs = SearchAutocompleteData.get({searchText:newInput});
      }
      if(!newInput){
        vm.drugs = [];
      }
    });

    $scope.$watch('search.loaded', function(){
      $scope.$emit('searchLoaded');
    });

    vm.submit = function(drug){
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

    vm.itemSelected = -1;
    vm.onKeydown = function($event){
      console.log($event);
      switch($event.which){
        // KEYUP
        case 38:
          if(vm.itemSelected > 0){
            vm.itemSelected--;
          }
          vm.getDrugNames = false;
          vm.input = vm.drugs.results[vm.itemSelected].name;
        break;
        // KEYDOWN
        case 40:
          vm.itemSelected++;
          vm.itemSelected = vm.itemSelected % vm.drugs.results.length;
          vm.getDrugNames = false;
          vm.input = vm.drugs.results[vm.itemSelected].name;
        break;
        default:
          vm.itemSelected = -1;
          vm.getDrugNames = true;
        break;
      }
    };

    vm.clearInput = function(){
      vm.input = '';
    };

  }

})();