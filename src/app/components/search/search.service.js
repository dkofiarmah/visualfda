(function() {
  'use strict';

  angular
    .module('openFDA')
    .factory('Search', Search);

  /** @ngInject */
  function Search(openFDADrugsEvents, $q) {

    // private attributes
    var _drugFileds = [
        // 'patient.drug.openfda.generic_name',
        'patient.drug.medicinalproduct',
    ];

    // Return a promise from search
    function _doQuery(text, field) {
       var d = $q.defer();
       var result = openFDADrugsEvents.get({ search: text, count:field }, function() {
            d.resolve(result);
       });
       return d.promise;
    }

    function _queriesFields(text){
        var _query = [];
        for (var i = _drugFileds.length - 1; i >= 0; i--) {
            _query.push(_drugFileds[i] + ':' + text);
        };
        return _query.join('+');
    }

    function _buildQueries(text){
        var _queries = [];
        for (var i = _drugFileds.length - 1; i >= 0; i--) {
            _queries.push(
                _doQuery(text, _drugFileds[i])
            );
        };
    }

    // Get all queries using drug name
    function all(text){
        var queryText = _queriesFields(text);
        var _queries = _buildQueries(queryText);

        return $q.all(_queries);
    }

    // api public
    return {
        all: all,
    }
  }

})();