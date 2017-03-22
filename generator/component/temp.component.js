import template from './<%= name %>.pug';
import controller from './<%= name %>.controller';
import './<%= name %>.scss';

let <%= upCaseName %>Component = {
  restrict: 'E',
  bindings: {},
  template: template(),
  controller
};

export default <%= upCaseName %>Component;
