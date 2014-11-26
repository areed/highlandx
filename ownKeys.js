/**
 * Returns an array of key names defined on the object.
 * @param {Object} o 
 * @return {string[]}
 */
function ownKeys(o) {
  var keys = [];

  for (var p in o) {
    if (o.hasOwnProperty(p)) {
      keys.push(p);
    }
  }

  return keys;
}

module.exports = ownKeys;
