/**
 * Returns a predicate that returns true if any predicates return true.
 * Passing no predicates will return true.
 * @param {Function[]} predicates
 * @return {Function}
 */
function disjoin() {
  var predicates = [].slice.call(arguments);

  return function() {
    var args = [].slice.call(arguments);

    return predicates.reduce(function(bool, predicate) {
      return bool || predicate.apply(null, args);
    }, false);
  };
}

module.exports = disjoin;
