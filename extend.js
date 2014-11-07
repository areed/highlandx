var _ = require('highland');

/**
 * Like highland's extend but does not mutate the extendee.
 * @param {Object} a
 * @param {Object} b
 * @return {Object}
*/
function extend(a, b) {
  var sourceCount = arguments.length;

  return _.extend(a, _.extend(b, {}));
}

module.exports = extend;
