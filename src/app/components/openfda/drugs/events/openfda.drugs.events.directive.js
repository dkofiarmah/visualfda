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
  function drugsEventsCtrl(openFDADrugsEvents, $scope) {
    var vm = this;

    // Attributes
    vm.filtered = 0;
    vm.total = 0;
    vm.percentage = 0;
    vm.data = {};

    openFDADrugsEvents.get({},function(data){
        vm.total = data.meta.results.total;
    });

    $scope.$on('search',function(e, data){
      openFDADrugsEvents.get({search:data, limit:10, count:'patient.reaction.reactionmeddrapt.exact'}, function(data){
        console.log(e,data);
        vm.data = data;
      });
      openFDADrugsEvents.get({search:data}, function(data){
        console.log(e,data);
        vm.filtered = data.meta.results.total;
        vm.percentage = vm.filtered / vm.total * 100;
      });
    });

  }

})();