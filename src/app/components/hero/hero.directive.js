// It show the hero page. A ramdom chart.
// Dependencies: angular-chart.js
(function(){
  'use strict';
  angular.module('fdaAppPrototype')
    .directive('alHero', alHero);

  /** @ngInject */
  function alHero(){
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/hero/hero.html',
      transclude: false,
      controller: heroCtrl,
      controllerAs: 'heroCtrl',
      bindToController: false,
    };
    return directive;
  }

  /** @ngInject */
  function heroCtrl($interval) {
    var maximum = angular.element('al-hero').clientWidth / 2 || 300,
    vm = this;

    vm.data = [[]];
    vm.labels = [];
    vm.options = {
      animation: false,
      showScale: false,
      showTooltips: false,
      pointDot: false,
      datasetStrokeWidth: 0.5
    };

    // Update the dataset at 25FPS for a smoothly-animating chart
    $interval(function () {
      getLiveChartData();
    }, 40);

    function getLiveChartData () {
      if (vm.data[0].length) {
        vm.labels = vm.labels.slice(1);
        vm.data[0] = vm.data[0].slice(1);
      }

      while (vm.data[0].length < maximum) {
        vm.labels.push('');
        vm.data[0].push(getRandomValue(vm.data[0]));
      }
    }
  }

  function getRandomValue (data) {
    var l = data.length, previous = l ? data[l - 1] : 50;
    var y = previous + Math.random() * 10 - 5;
    return y < 0 ? 0 : y > 100 ? 100 : y;
  }

})();