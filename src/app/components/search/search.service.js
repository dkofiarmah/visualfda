(function() {
  'use strict';

  angular
    .module('openFDA')
    .factory('SearchAutocompleteData', SearchAutocompleteData);

  /** @ngInject */
  function SearchAutocompleteData($resource) {
    return $resource('http://fdadrugnames.herokuapp.com/api/drugs/');
  }

})();