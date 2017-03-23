import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import subscribeComponent from './subscribe.component';

let subscribeModule = angular.module('subscribe', [
  uiRouter, uiBootstrap
])
// .config(($stateProvider, $urlRouterProvider) => {
//   'ngInject';
//
//   $stateProvider
//     .state('subscribe', {
//       url: '/subscribe',
//       component: 'subscribe',
//     });
// })
.component('subscribe', subscribeComponent)

// .name;

export default subscribeModule;
