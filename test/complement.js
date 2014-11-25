var expect = require('chai').expect;
var complement = require('../complement');

describe('complement', function() {
  it('should reverse the truth value returned by a predicate.', function() {
    var areStrings = function(s, t) {
      return typeof s === 'string' && typeof t === 'string';
    };

    expect(areStrings('s', 't')).to.equal(true);
    expect(complement(areStrings)('s', 't')).to.equal(false);
    expect(areStrings('s', 1)).to.equal(false);
    expect(complement(areStrings)('s', 1)).to.equal(true);
  });
});
