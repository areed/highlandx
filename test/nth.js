var expect = require('chai').expect;
var nth = require('../nth');

describe('nth', function() {
  it('should return a function that returns the item at the given index.', function() {
    var list = ['a', 'b', 'c', 'd'];

    expect(nth(0)(list)).to.equal('a');
    expect(nth(3)(list)).to.equal('d');
  });
});
