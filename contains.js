/**
 * Returns true iff the list contains the item.
 * @param {*} item
 * @param {Array} list
 * @return {boolean}
 */
function contains(item, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
