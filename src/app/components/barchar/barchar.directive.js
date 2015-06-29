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
         total:'=',
         highest:'=',
      },
      templateUrl:'app/components/barchar/barchar.html',
      transclude:false,
      link: function(scope, element) {
        scope.$watch('[ngModel, total]', function(newValue) {
          var percentage;
          if (newValue){
            scope.percentage = $filter('percentage')(scope.ngModel, scope.total);


            var width = 100 * Number(scope.ngModel) / Number(scope.highest);
            console.log(width);
            angular.element(element).find('.al-barchar__bar').css('width', width + '%');
            console.log(angular.element(element).find('.al-barchar__percentage'));
          }
        }, true);
      },
    };
    return directive;
  }

})();