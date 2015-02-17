var expect = require('chai').expect;
var access = require('../access');

describe('access', function() {
  var obj = { name: 'Bill' };

  it('should return a function that returns the value at a given key.', function() {
    var getName = access('name');

    expect(typeof getName).to.equal('function');
    expect(getName(obj)).to.equal('Bill');
  });
});
