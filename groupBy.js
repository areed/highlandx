/**
 * Maps each item in an array to a key.
 * @param {Function} grouper
 * @param {Array} list
 * @return {Object}
 */
function groupBy(grouper, list) {
  return list.reduce(function(memo, item) {
    var key = grouper(item);
    memo[key] = (memo[key] || []).concat(item);
    return memo;
  }, {});
}

module.exports = groupBy;
