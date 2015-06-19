(function() {
  'use strict';

  angular
    .module('testingTravisIntegration')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
