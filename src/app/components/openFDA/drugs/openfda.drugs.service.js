(function() {
  'use strict';

  angular
    .module('openFDA')
    .factory('drugs', openFDA);

  /** @ngInject */
  function openFDA($log, $http) {
    var apiHost = 'https://api.fda.gov/drug/event.json?search=patient.drug.openfda.pharm_class_epc:"nonsteroidal+anti-inflammatory+drug"&count=patient.reaction.reactionmeddrapt.exact&api_key=9gdsEjIJ9AHxUa3ALkGOzcUllU5D1bABKExTXDZ9';

    var service = {
      apiHost: apiHost,
      getContributors: getContributors
    };

    return service;

    function getContributors(limit) {
      if (!limit) {
        limit = 30;
      }

      return $http.get(apiHost)
        .then(getContributorsComplete)
        .catch(getContributorsFailed);

      function getContributorsComplete(response) {
        return response.data;
      }

      function getContributorsFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }

})();