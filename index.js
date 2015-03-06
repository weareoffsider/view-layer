var express = require("express");
var bodyParser = require("body-parser");
var _ = require("lodash");


module.exports = function() {
  var viewApp = express();
  viewApp.use(bodyParser.json());

  return {
    route: function(routePath, handler, opts) {
      opts = opts || {};
      opts.defaults = opts.defaults || {};
      viewApp.get(routePath, function(req, res) {
        var args = {};
        _.assign(args, opts.defaults);
        _.assign(args, req.params);

        var result = handler(args);

        if (result.then) {
          result.then(function(out) {
            res.type("html").send( out );
          });
        } else {
          res.type("html").send( result );
        };
      });

      viewApp.put(routePath, function(req, res) {
        var args = {};
        _.assign(args, opts.defaults);
        _.assign(args, req.params);
        _.assign(args, req.body);

        var result = handler(args);

        if (result.then) {
          result.then(function(out) {
            res.type("html").send( out );
          });
        } else {
          res.type("html").send( result );
        };
      });
    },

    configApp: function(cb) {
      cb(viewApp);
    },

    listen: function(port, hostname, backlog, callback) {
      viewApp.listen(port, hostname, backlog, callback);
    }
  };
};

