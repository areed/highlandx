/**
 * Returns a function that returns the nth element from an Array.
 * @param {number} n
 * @return {Function}
 */
function nth(n) {
  return function(list) {
    return list[n];
  };
}

module.exports = nth;
