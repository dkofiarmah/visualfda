// It show the hero page. A ramdom chart.
// Dependencies: angular-chart.js
(function(){
  'use strict';
  angular.module('openFDA')
    .directive('alDrugsEvents', alDrugsEvents);

  /** @ngInject */
  function alDrugsEvents(){
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/openfda/drugs/openfda.drugs.html',
      controller: drugsEventsCtrl,
      controllerAs: 'drugEvent',
      transclude: false,
      bindToController: false,
    };
    return directive;
  }

  /** @ngInject */
  function drugsEventsCtrl(openFDADrugsEvents, $scope) {
    var vm = this;
    vm.data = [[]];
    vm.labels = [];
    vm.series = ['patient.reaction.reactionmeddrapt'];
    vm.field = {
        name: 'Patient reaction',
        field: 'patient.reaction.reactionmeddrapt'
    };
    vm.limit = 10;
    vm.fields = [
      {
        name: 'Sender organization',
        field: 'sender.senderorganization'
      },
      {
        name: 'patient.reaction.reactionmeddrapt',
        field: 'patient.reaction.reactionmeddrapt'
      },
    ];



    var draw = function(){
      var params = {};
      if(vm.field){
        params['count'] = vm.field.field;
      }
      if(vm.limit){
        params['limit'] = vm.limit;
      }
      openFDADrugsEvents.get(params, function(response){
        var labels = [];
        var data = [];
        for (var i = 0; i < response.results.length; i++) {
          labels.push(response.results[i].term);
          data.push(response.results[i].count);
        };
          vm.data = [
            data
          ];
          vm.labels = labels;
      });
    };

    $scope.$watch('[drugEvent.field, drugEvent.filter, drugEvent.limit]', draw, true);


  }

})();