var expect = require('chai').expect;
var ownKeys = require('../ownKeys');

describe('ownKeys', function() {
  it('should an array of enumerable own property keys.', function() {
    var proto =  {a: 'a'};
    var o = Object.create(proto);
    o.b = 'b';
    o.c = 'c';
    var keys = ownKeys(o);

    expect(keys).to.deep.equal(['b', 'c']);
  });
});
