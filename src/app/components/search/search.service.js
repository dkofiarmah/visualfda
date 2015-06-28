(function() {
  'use strict';

  angular
    .module('openFDA')
    .factory('SearchAutocompleteData', SearchAutocompleteData);

  /** @ngInject */
  function SearchAutocompleteData($resource) {
    return $resource('http://localhost:8000/api/drugs/');
  }

})();