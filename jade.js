var jade = require("jade");

module.exports = function(templateName, options) {
  options = options || {};

  var render = jade.compileFile(templateName, options);

  return function(args) {
    return render(args);
  };
};
