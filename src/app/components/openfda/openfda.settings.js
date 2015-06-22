/* openFDA settings */
(function() {
  'use strict';

  angular
    .module('openFDA')
      .constant('openFDASettings', {
        baseURL: '//api.fda.gov',
        api_key: '9gdsEjIJ9AHxUa3ALkGOzcUllU5D1bABKExTXDZ9',
        status: 'status',
        resource: {
          drug: {
            path: 'drug',
            event: 'event.json',
            enforcement: 'enforcement.json',
            label: 'label.json',
          },
          device: {
            path: 'device',
            event: 'event.json',
            enforcement: 'enforcement.json',
          },
          food: {
            path: 'food',
            enforcement: 'enforcement.json',
          },
        }
      });

})();
