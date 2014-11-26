var ownKeys = require('./ownKeys');

/**
 * @param {Object} o
 * @return {Array}
 */
function values(o) {
  return ownKeys(o).map(function(key) {
    return o[key];
  });
}

module.exports = values;
