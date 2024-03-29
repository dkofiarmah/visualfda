/* global window */
(function() {
  'use strict';

  angular
    .module('fdaAppPrototype')
    .config(function($httpProvider) {
      $httpProvider.interceptors.push(function($q) {
        var realEncodeURIComponent = window.encodeURIComponent;
        return {
          'request': function(config) {
             window.encodeURIComponent = function(input) {
               return realEncodeURIComponent(input).split('%2B').join('+').split('%251F').join('"');
             };
             return config || $q.when(config);
          },
          'response': function(config) {
             window.encodeURIComponent = realEncodeURIComponent;
             return config || $q.when(config);
          }
        };
      });
    })
    // resources no trailing slash
    .config(function($resourceProvider) {
      $resourceProvider.defaults.stripTrailingSlashes = false;
    });

})();