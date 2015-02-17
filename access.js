/**
 * Returns the value assigned to an object key.
 * @param {String} key
 * @return {Function} expects an object and returns any type found at the key
 */
function access(key) {
  return function(o) {
    return o[key];
  };
}

module.exports = access;
