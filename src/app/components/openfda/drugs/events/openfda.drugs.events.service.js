(function() {
  'use strict';

  angular
    .module('openFDA')
    .factory('openFDADrugsEvents', openFDADrugsEvents);

  /** @ngInject */
  function openFDADrugsEvents($resource, openFDAService) {
    var _fields = [
        'patient.drug.openfda.brand_name',
        'patient.drug.openfda.generic_name',
    ],
    _get = function(){
        return $resource(openFDAService.url('drug', 'event')).get;
    },
    _createFilter = function(searchText){
        var filter = searchText.trim(),
        filters = [];

        filter = ('%1F'+filter+'%1F').replace(' ','+');

        for (var i = _fields.length - 1; i >= 0; i--) {
            filters.push(_fields[i] + ':' + filter);
        };
        filter = filters.join('+');
        return filter;
    };
    return {
        get:_get(),
        createFilter:_createFilter,
    }
  }

})();