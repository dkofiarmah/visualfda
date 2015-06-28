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
    }
    initialize();


    openFDADrugsEvents.get({},function(data){
        vm.total = data.meta.results.total;
    });

    $scope.$on('search',function(e, data){
      var reactions,
          total;

      vm.searching = true;

      reactions = openFDADrugsEvents.get({search:data, limit:10, count:'patient.reaction.reactionmeddrapt.exact'}, function(data){
        console.log(e,data);
        vm.data = data;
      });
      total = openFDADrugsEvents.get({search:data}, function(data){
        console.log(e,data);
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

      $q.all([
        total.$promise,
        reactions.$promise,
      ]).then(searchFinished,searchNotFound);
    });

  }

})();