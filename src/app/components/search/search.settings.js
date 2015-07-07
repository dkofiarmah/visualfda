/* search settings */
(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
      .constant('searchSettings', {
        baseURL: '//apisideeffects.agileana.com/',
        apiPath: '/api',
        resource: {
          drug: {
            path: '/drugs',
          },
        }
      });

})();
