import angular from 'angular';
import Home from './home/home';
// import About from './about/about';
// import Subscribe from './subscribe/subscribe';

const componentModule = angular.module('app.components', [
  Home,
  // About,
  // Subscribe
])

.name;

export default componentModule;
