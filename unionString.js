/**
 * Computes the union of two arrays of strings.
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
function unionString(A, B) {
  var added = {};
  var union = [];

  function yes(x) {
    if (added[x]) return;
    added[x] = true;
    union.push(x);
  }
  A.forEach(yes);
  B.forEach(yes);
  return union;
}

module.exports = unionString;
