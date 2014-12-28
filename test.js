var viewLayer = require("./index.js");
var jade = require("./jade");
var React = require("react");
var react = require("./react");
var reactWrapped = require("./react-wrapped");
app = viewLayer();


var testReactClass = React.createClass({
  render: function() {
    return React.DOM.h1({}, "This is React");
  }
});


app.route("/", jade("test.jade"));
app.route("/wrapped", reactWrapped(
  testReactClass, jade("test-react-wrapper.jade")
));

app.listen(4000);
