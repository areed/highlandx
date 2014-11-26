var url = require('url');

/**
 * Returns true if the argument is a valid absolute URL.
 * @param {string} x
 * @return {boolean}
 */
function isURL(x) {
  var parsed = url.parse(x);

  return !!(parsed.protocol && parsed.hostname && parsed.pathname);
}

module.exports = isURL;
