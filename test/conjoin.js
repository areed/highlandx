var expect = require('chai').expect;
var conjoin = require('../conjoin');

describe('conjoin', function() {
  it('should return true iff all predicates are true.', function() {
    var isNumber = function(n) {
      return typeof n === 'number';
    };
    var isPositive = function(n) {
      return n > 0;
    };
    var conjoined = conjoin(isNumber, isPositive);
    expect(conjoined(1)).to.equal(true);
    expect(conjoined(-1)).to.equal(false);
    expect(conjoined('1')).to.equal(false);
    expect(conjoined('-1')).to.equal(false);
  });
});
