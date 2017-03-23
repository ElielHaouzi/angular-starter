import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
  uiRouter,
  uiBootstrap
])
// .config(($stateProvider, $urlRouterProvider) => {
//   'ngInject';
//
//   $stateProvider
//     .state('about', {
//       url: '/about',
//       component: 'about',
//     });
// })
.component('about', aboutComponent)

// .name;

export default aboutModule;
