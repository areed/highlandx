/**
 * Returns true unless the value is null or undefined.
 * @param {*} value
 * @return {boolean}
 */
function existy(value) {
  return value !== null && value !== undefined;
}

module.exports = existy;
