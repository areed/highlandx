var expect = require('chai').expect;
var disjoin = require('../disjoin');

describe('disjoin', function() {
  it('should return true iff any predicates are true.', function() {
    var isNumber = function(n) {
      return typeof n === 'number';
    };
    var isPositive = function(n) {
      return n > 0;
    };
    var disjoined = disjoin(isNumber, isPositive);

    expect(disjoined('1')).to.equal(true);
    expect(disjoined(-1)).to.equal(true);
    expect(disjoined('-1')).to.equal(false);
  });
});
