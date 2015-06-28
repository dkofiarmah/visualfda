'use strict';

/**
 * @ngdoc function
 * @name fdaAppPrototype.decorator:Loading
 * @description
 * # Loading
 * Decorator of the fdaAppPrototype
 */
angular.module('fdaAppPrototype')
  .config(function ($provide, $httpProvider) {
    $provide.factory('HttpLoadingInterceptor', ['$q', '$rootScope', function($q, $rootScope) {
      var countRequest = 0;
      var redirecting = false;
      var setLoading = function(value){
        if(value){
          countRequest++;
          $rootScope.loading = true;
        }else{
          countRequest--;
          if(countRequest === 0){
            $rootScope.loading = false;
          }
        }
      };
      return {
        // requests method
        'request': function(config) {
          // do something on success
          setLoading(true);
          return config || $q.when(config);
        },

        // requestError method
        'requestError': function(rejection) {
          // do something on error
          setLoading(false);
          return $q.reject(rejection);
        },

        // response method
        'response': function(response) {
          // do something on success
          setLoading(false);
          return response || $q.when(response);
        },

        // responseError method
        'responseError': function(rejection) {
          // do something on error
          setLoading(false);
          return $q.reject(rejection);
        }
      };
    }]);

    //Http Intercpetor to check auth failures for xhr requests
    $httpProvider.interceptors.push('HttpLoadingInterceptor');

  });
