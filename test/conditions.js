var expect = require('chai').expect;
var validator = require('../validator');
var identity = require('../identity');

var conditions = require('../conditions');

describe('conditions', function() {
  var isNonzero = validator('cannot be zero', function(n) { return n !== 0; });
  var isOdd = validator('must be odd', function(n) { return n % 2 !== 0; });
  var nonzeroOddPre = conditions(isNonzero, isOdd);

  it('should run a function if the arguments are valid.', function() {
    expect(nonzeroOddPre(identity, 1)).to.equal(1);
  });

  it('should throw an error if a condition fails', function() {
    var caught;

    try {
      nonzeroOddPre(identity, 2);
    } catch(e) {
      caught = e.message;
    }

    expect(caught).to.equal('must be odd');
  });

  it('should include all failed validation messages.', function() {
    var caught;

    try {
      nonzeroOddPre(identity, 0);
    } catch (e) {
      caught = e.message;
    }

    expect(caught).to.equal('cannot be zero, must be odd');
  });
});
