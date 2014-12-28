# view-layer

Just a humble little Express Wrapper, intended to gradually formalize a pattern
I'm exploring where Node merely serves as a template renderer, with all genuine
server work done elsewhere. The implication here is that I do not wish to write
the bulk of my server code base in Node, however it's value as a primary front
end language is undeniable. By abstracting all templating to a Node Server, we
can get the best of the front end ecosystem without losing the stability and
maturity of existing backend ecosystems.

```
npm install view-layer
```

## API

### Initialising

```javascript
var viewLayer = require("view-layer");

var app = viewLayer();
```

### Routing
```javascript
var jade = require("view-layer/jade"); // A simple Jade Wrapper

app.route("/", jade("some-template.jade"));
```

#### app.route(path: string, handlerFunction: (args) -> string)
All routes are GETs, parsed for JSON which is parsed to the handler function.
Handlers return strings which are then rendered to the request. Some examples of
wrappers can be found in "view-layer/jade" and "view-layer/react-wrapped"


### Listening
```javascript
app.listen(4000);
```

#### app.listen(port: number, host: string, backlog: number, callback: () -> any)
Start listen for requests. This is just a wrapper for express().listen, which is
in turn a wrapper for http.Server.listen

## License
Copyright (c) 2015 Offsider, under the MIT License
