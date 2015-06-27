// Barchar directive
(function(){
  'use strict';
  angular.module('openFDA')
    .directive('alBarchar', alBarchar);

  /** @ngInject */
  function alBarchar($filter){
    var directive = {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.style.width = '20%';
      },
    };
    return directive;
  }

})();