/**
 * Reverses the truth value of a predicate.
 * @param {Function} predicate
 * @return {Function}
 */
function complement(predicate) {
  return function() {
    return !predicate.apply(null, [].slice.call(arguments));
  };
}

module.exports = complement;
