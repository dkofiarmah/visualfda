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
           /* other props*/
           model:'@'/* now have reference to parent object in scope*/
        },
      link: function(scope, element, attrs) {
        var percentage = attrs.total/scope;
        element[0].style.width = '20%';
      },
    };
    return directive;
  }

})();