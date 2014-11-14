var expect = require('chai').expect;

var validator = require('../validator');

describe('validator', function() {
  var nonzero = validator('cannot be zero', function(n) { return 0 !== n; });

  it('should return true if the arguments are valid', function() {
    expect(nonzero(1)).to.equal(true);
    expect(nonzero(0)).to.equal(false);
  });

  it('should have a descriptive message property.', function() {
    expect(nonzero).to.have.property('message', 'cannot be zero');
  });
});
