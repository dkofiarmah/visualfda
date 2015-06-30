/* search settings */
(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
      .constant('searchSettings', {
        baseURL: '//ec2-52-5-168-97.compute-1.amazonaws.com/',
        apiPath: '/api',
        resource: {
          drug: {
            path: '/drugs',
          },
        }
      });

})();
