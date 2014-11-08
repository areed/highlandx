highlandx
=========

Simple implementations of functions I need that are not included with
highland.js. Each function is its own module. Argument order follows highland to
enable easy currying.

```javascript
var pick = require('highlandx/pick');
var _ = require('highland');

var foo = _.curry(pick, ['foo']);
var obj = {foo: 'bar': notfoo: true};

//foo(obj) => 'bar';
```
