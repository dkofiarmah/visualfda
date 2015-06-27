(function() {
  'use strict';

  angular
    .module('openFDA')
    .factory('openFDADrugsEvents', openFDADrugsEvents);

  /** @ngInject */
  function openFDADrugsEvents($resource, openFDAService) {
    return $resource(openFDAService.url('drug', 'event'));
  }

})();