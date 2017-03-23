import template from './home.pug';
import controller from './home.controller';
import './home.scss';

const homeComponent = {
  restrict: 'E',
  bindings: {},
  template: template(),
  controller,
};

export default homeComponent;
