/**
 * Returns true if the predicate is true of any item in an array.
 * @param {Function} predicate
 * @param {Array} list
 * @return {Boolean}
 */
module.exports = function some(predicate, list) {
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return true;
    }
  }
  return false;
};
