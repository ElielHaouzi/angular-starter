import template from './about.pug';
import controller from './about.controller';
import './about.scss';

let AboutComponent = {
  restrict: 'E',
  bindings: {},
  template: template(),
  controller
};

export default AboutComponent;
