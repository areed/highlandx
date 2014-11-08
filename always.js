/**
 * Returns a function that always returns a given value.
 * @param {*} value
 * @return {Function}
 */
function always(value) {
  return function() {
    return value;
  };
}

module.exports = always;
