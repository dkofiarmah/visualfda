/* global Math */
// Barchar directive
(function(){
  'use strict';
  angular.module('openFDA')
    .directive('alBarchar', alBarchar);

  /** @ngInject */
  function alBarchar($filter){
    var directive = {
      restrict: 'A',
      scope: {
         ngModel:'=',
         total:'='
      },
      link: function(scope, element, attrs) {
        scope.$watch('[ngModel, total]', function(newValue, oldValue) {
          var percentage;
          console.log('scope.ngModel',scope.ngModel);
          if (newValue){
            percentage = Number(scope.ngModel)/Number(scope.total)*100;
            console.log(percentage, 'percentage', 'scope', scope);
            percentage = $filter('percentage')(percentage);
            element[0].style.width = percentage;
          }
        }, true);
      },
    };
    return directive;
  }

})();