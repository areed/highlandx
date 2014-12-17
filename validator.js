/* Fogus page 83 */
/**
 * Binds a predicate to an error message.
 * @param {string} message
 * @param {function} predicate
 */
function validator(message, predicate) {
  var f = function(/* args */) {
    return predicate.apply(predicate, arguments);
  };

  f.message = message;
  return f;
}

module.exports = validator;
