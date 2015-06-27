(function() {
  'use strict';

  angular
    .module('openFDA')
    .factory('Search', Search);

  /** @ngInject */
  function Search($resource, openFDAService, $q) {
    var medicinalproduct = $resource(openFDAService.url('drug', 'event'),{count:'patient.drug.medicinalproduct'}),
        brandName = $resource(openFDAService.url('drug', 'event'),{count:'patient.drug.openfda.brand_name'});

    return
  }

})();