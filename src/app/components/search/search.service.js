(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
    .factory('SearchAutocompleteData', SearchAutocompleteData);

  /** @ngInject */
  function SearchAutocompleteData($resource, searchSettings) {
    return $resource(searchSettings.baseURL + searchSettings.apiPath + searchSettings.resource.drug.path);
  }

})();