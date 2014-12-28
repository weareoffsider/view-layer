var express = require("express");
var bodyParser = require("body-parser");
var _ = require("lodash");


module.exports = function() {
  var viewApp = express();
  viewApp.use(bodyParser.json());

  return {
    route: function(routePath, handler, opts) {
      viewApp.get(routePath, function(req, res) {
        var args = {};
        _.assign(args, req.params);
        _.assign(args, req.body);

        res.type("html").send( handler(args) );
      });
    },

    listen: function(port, hostname, backlog, callback) {
      viewApp.listen(port, hostname, backlog, callback);
    }
  };
};

