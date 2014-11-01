var expect = require('chai').expect;
var unionString = require('../unionString');

describe('unionString', function() {
  it('should return the union of two arrays of strings.', function() {
    var A = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i'];
    var B = ['a', 'b', 'c', 'd', 'e', 'j', 'j', 'a'];

    expect(unionString(A, B)).to.deep.equal(['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'e', 'j']);
  });
});
