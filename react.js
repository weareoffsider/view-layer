var React = require("react");
var _ = require("lodash");

module.exports = function(reactClass, additionalProps) {
  return function(args) {
    var props = _.clone(args);
    if (additionalProps) _.assign(props, additionalProps);

    var element = React.createElement(reactClass, props);
    return React.renderToString(element);
  };
};
