var expect = require('chai').expect;
var pick = require('../pick');

describe('pick', function() {
  it('should return a clone of an object with only whitelisted keys.', function() {
    var source = {a: true, b: true, c: true, d: true};

    expect(pick(['a', 'c'], source)).to.deep.equal({a: true, c: true});
  });
});
