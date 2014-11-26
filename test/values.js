var expect = require('chai').expect;

var values = require('../values');

describe('values', function() {
  it('should return an array of property values.', function() {
    var o = {a: 1, b: 'b', c: false, d: undefined, e: null};
    expect(values(o)).to.deep.equal([1, 'b', false, undefined, null]);
  });
});
