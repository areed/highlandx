var expect = require('chai').expect;
var contains = require('../contains');

describe('contains', function() {
  it('should check whether the list already has the item.', function() {
    expect(contains('a', [1, 'a', true])).to.equal(true);
    expect(contains(1, [true, '1', undefined])).to.equal(false);
  });
});
