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
      controllerAs: 'results',
      transclude: false,
      bindToController: false,
    };
    return directive;
  }

  /** @ngInject */
  function drugsEventsCtrl(openFDADrugsEvents, $scope) {
    var vm = this;

    // Attributes
    vm.filtered = 7580;
    vm.total = 4580045;
    vm.percentage = 45;

  }

})();