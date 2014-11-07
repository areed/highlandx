var extend = require('./extend');

/**
 * Extends an object with an arbitrary number of sources.
 * @param {...Object}
 * @return {Object}
 */
function extendN() {
  var args = [].slice.call(arguments);

  if (args.length <= 1) {
    return args[0];
  }

  return extend(args[0], extendN.apply(null, args.slice(1)));
}

module.exports = extendN;
