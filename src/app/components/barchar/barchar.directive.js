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
      transclude:false,
      link: function(scope, element, attrs) {
        scope.$watch('[ngModel, total]', function(newValue, oldValue) {
          var percentage;
          if (newValue){
            percentage = $filter('percentage')(scope.ngModel, scope.total);
            element[0].style.width = percentage;
          }
        }, true);
      },
    };
    return directive;
  }

})();