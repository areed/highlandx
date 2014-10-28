var _ = require('highland');

/**
 * Returns a shallow clone of an object with only whitelisted keys.
 * @param {string[]} keys - an array of strings
 * @param {Object} obj
 * @return {Object}
 */
module.exports = function(keys, obj) {
  return _(keys).reduce({}, function(copy, key) {
    if (key in obj) {
      copy[key] = _.get(key, obj);
    }
    return copy;
  });
};
