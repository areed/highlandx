/**
 * Returns the first element for which the predicate is true.
 * @param {Function} predicate
 * @param {Array} list
 * @return {*}
 */
function find(predicate, list) {
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return list[i];
    }
  }
}

module.exports = find;
