var expect = require('chai').expect;

var always = require('../always');

describe('always', function() {
  it('should return the given value', function() {
    var table = [1, 'one', true, false, null, undefined, {}, [1]];

    table.forEach(function(v) {
      var fn = always(v);

      expect(fn(false)).to.equal(v);
    });
  });
});
