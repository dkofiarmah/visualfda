// openFDAService is use to build the openFDA api urls,
// and check the openFDA api status
(function() {
  'use strict';

  angular
    .module('openFDA')
    .service('openFDAService', openFDAService);

    function openFDAService(openFDASettings, URI, $log, $resource){
      var settings = openFDASettings;

      this.url = function(resource, type){
        if(typeof resource === 'undefined' || typeof type === 'undefined'){
          $log.error('resource and type are required');
        }
        var url = new URI(settings.baseURL),
        directory = settings.resource[resource];

        url.directory(directory.path);
        url.filename(directory[type]);

        return url.toString();
      };

      this.statusURL = function(){
        var url = new URI(settings.baseURL);
        url.filename(settings.status);
        return url.toString();
      };

      this.status = function(){
        var url = this.statusURL();
        return $resource(url).query({});
      };

    }

})();