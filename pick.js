var _ = require('highland');

/**
 * Returns a shallow clone of an object with only whitelisted keys.
 * @param {string[]} keys - an array of strings permitted in the return object
 * @param {Object} obj
 * @return {Object}
 */
function pickSync(keys, obj) {
  return keys.reduce(function(copy, key) {
    if (key in obj) {
      copy[key] = _.get(key, obj);
    }
    return copy;
  }, {});
}

module.exports = pickSync;
