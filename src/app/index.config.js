(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    // toastr.options.timeOut = 3000;

  }

})();
