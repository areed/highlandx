var expect = require('chai').expect;
var extend = require('../extend');

describe('extend', function() {
  it('should copy all properties from the source to a copy of the destination object', function() {
    var a = {a: true};
    var b = {b: true};
    var c = extend(a, b);

    expect(a).to.deep.equal({a: true});
    expect(b).to.deep.equal({b: true});
    expect(c).to.deep.equal({a: true, b: true});
  });
});
