var existy = require('./existy');

/* Fogus pp 105 */

/**
 * @param {Function[]} validators predicates with a message property
 * @return {Function}
 */
function conditions(/* validators */) {
  var validators = [].slice.call(arguments);

  return function(fn /*, args*/) {
    var args = [].slice.call(arguments, 1);
    var errors = validators.map(function(isValid) {
      return isValid.apply(null, args) ? null : isValid.message;
    }).filter(existy);

    if (errors.length) {
      throw new Error(errors.join(', '));
    }

    return fn.apply(null, args);
  };
}

module.exports = conditions;
