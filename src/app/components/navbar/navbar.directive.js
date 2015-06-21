(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
    .directive('alNavbar', alNavbar);

  /** @ngInject */
  function alNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm'
    };

    return directive;

    /** @ngInject */
    function NavbarController() {

    }
  }

})();
