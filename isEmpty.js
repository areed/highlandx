/**
 * Returns true iff the object has no own properties.
 * @param {Object} o
 * @return {boolean}
 */
function isEmpty(o) {
  for (var p in o) {
    if (o.hasOwnProperty(p)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;
