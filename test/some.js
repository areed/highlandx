var expect = require('chai').expect;
var some = require('../some');

describe('some', function() {
  describe('isPositive', function() {
    function isPositive(n) {
      return n > 0;
    }

    var none = [0, -1, -2, -3];
    var one = [0, 1, -2, -3];
    var all = [1, 2, 3];

    describe(JSON.stringify(none), function() {
      it('should return false', function() {
        expect(some(isPositive, none)).to.equal(false);
      });
    });

    describe(JSON.stringify(one), function() {
      it('should return true', function() {
        expect(some(isPositive, one)).to.equal(true);
      });
    });

    describe(JSON.stringify(all), function() {
      it('should return true.', function() {
        expect(some(isPositive, all)).to.equal(true);
      });
    });
  });
});
