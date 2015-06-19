(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
