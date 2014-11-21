var expect = require('chai').expect;

var last = require('../last');

describe('last', function() {
  it('should return the last element of an array.', function() {
    expect(last(['a', 'b', 'c', 'd'])).to.equal('d');
  });
});
