// It show the hero page. A ramdom chart.
// Dependencies: angular-chart.js
(function(){
  'use strict';
  angular.module('fdaAppPrototype')
    .controller('HeroCtrl', HeroCtrl);

  /** @ngInject */
  function HeroCtrl($interval) {
    var hero = this,
    maximum = document.getElementById('container').clientWidth / 2 || 300;

    hero.data = [[]];
    hero.labels = [];
    hero.options = {
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
      console.log("hero.data", hero.data);
      if (hero.data[0].length) {
        hero.labels = hero.labels.slice(1);
        hero.data[0] = hero.data[0].slice(1);
      }

      while (hero.data[0].length < maximum) {
        hero.labels.push('');
        hero.data[0].push(getRandomValue(hero.data[0]));
      }
    }
  }

  function getRandomValue (data) {
    var l = data.length, previous = l ? data[l - 1] : 50;
    var y = previous + Math.random() * 10 - 5;
    return y < 0 ? 0 : y > 100 ? 100 : y;
  }

})();