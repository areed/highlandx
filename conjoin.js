/**
 * Returns a predicate that returns true if all predicates return true.
 * @param {Function[]} predicates
 * @return {Function}
 */
function conjoin() {
  var predicates = [].slice.call(arguments);
  
  return function() {
    var args = [].slice.call(arguments);
    
    return predicates.reduce(function(bool, predicate) {
      return bool && predicate.apply(null, args);
    }, true);
  };
}

module.exports = conjoin;
