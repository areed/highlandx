/* Fogus pp 83 */
/**
 *
 */
function validator(message, fn) {
  var f = function(/* args */) {
    return fn.apply(fn, arguments);
  };

  f.message = message;
  return f;
}

module.exports = validator;
