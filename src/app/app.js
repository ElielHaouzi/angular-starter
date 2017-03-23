import angular from 'angular';

import uiRouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyload'

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
  uiRouter,
  ocLazyLoad,
  // Common,
  Components
])
.config(($locationProvider, $stateProvider, $urlRouterProvider) => {
  'ngInject';

  $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about',
      resolve: {
        lazyLoad($q, $ocLazyLoad) {
          "ngInject";

          let deferred = $q.defer();
          // Async require => Split point
          require.ensure([], function () {
            //
            // All the code here, plus the required modules
            // will be bundled in a separate file.
            let module = require('./components/about/about');
            // OCLazyLoad's 'load' function loads the Angular module.
            $ocLazyLoad.load({
                name: module.default.name
            });
            deferred.resolve(module);
          });
          return deferred.promise;
        }
      }
    });

    $stateProvider
      .state('subscribe', {
        url: '/subscribe',
        component: 'subscribe',
        resolve: {
          lazyLoad($q, $ocLazyLoad) {
            "ngInject";

            let deferred = $q.defer();
            // Async require => Split point
            require.ensure([], function () {

              // All the code here, plus the required modules
              // will be bundled in a separate file.
              let module = require('./components/subscribe/subscribe');
              // OCLazyLoad's 'load' function loads the Angular module.
              $ocLazyLoad.load({
                  name: module.default.name
              });
              deferred.resolve(module);
            });
            return deferred.promise;
          }
        }
      });
})
.component('app', AppComponent);
