var expect = require('chai').expect;
var extendN = require('../extendN');

describe('extendN', function() {
  it('should copy all properties from all sources to a new object.', function() {
    var a = {a: true};
    var b = {b: true};
    var c = {c: true};
    var e = extendN(a, b, c);

    expect(a).to.deep.equal({a: true});
    expect(b).to.deep.equal({b: true});
    expect(c).to.deep.equal({c: true});
    expect(e).to.deep.equal({a: true, b: true, c: true});
  });
});
