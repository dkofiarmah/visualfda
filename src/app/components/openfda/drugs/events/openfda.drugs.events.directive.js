// Charts directive
(function(){
  'use strict';
  angular.module('openFDA')
    .directive('alDrugsEvents', alDrugsEvents);

  /** @ngInject */
  function alDrugsEvents(){
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/openfda/drugs/events/openfda.drugs.events.html',
      controller: drugsEventsCtrl,
      controllerAs: 'drugEvents',
      transclude: false,
      bindToController: false,
    };
    return directive;
  }

  /** @ngInject */
  function drugsEventsCtrl(openFDADrugsEvents, $scope, $rootScope, $q) {
    var vm = this;

    vm.total = 0;
    function initialize(){
      // Attributes
      vm.filtered = 0;
      vm.percentage = 0;
      vm.data = {};
      vm.searching = false;
      vm.drugName = '';
    }
    initialize();

    openFDADrugsEvents.get({},function(data){
        vm.total = data.meta.results.total;
    });

    $scope.$on('search',function(e, data){
      var reactions,
          total,
          filter;

      vm.drugName = data.trim();

      vm.searching = true;
      filter = openFDADrugsEvents.createFilter(vm.drugName);
      reactions = openFDADrugsEvents.get({search:filter, limit:10, count:'patient.reaction.reactionmeddrapt.exact'}, function(data){
        vm.data = data;
      });
      total = openFDADrugsEvents.get({search:filter}, function(data){
        vm.filtered = data.meta.results.total;
        vm.percentage = vm.filtered / vm.total * 100;
      });

      function searchFinished(){
        vm.searching = false;
      }
      function searchNotFound(){
        vm.searching = false;
        $rootScope.$broadcast('searchNotFound');
        initialize();
      }

      var filteredMonitoring = function(newValue, oldValue){
        if(newValue > 0){
          $scope.$emit('results-found', newValue);
        }
      };

      $scope.$watch('drugEvents.filtered', filteredMonitoring, true);

      $q.all([
        total.$promise,
        reactions.$promise,
      ]).then(searchFinished,searchNotFound);
    });

  }

})();