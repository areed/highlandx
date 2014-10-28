var expect = require('chai').expect;
var pick = require('../pick');

describe('pick', function() {
  it('should return a clone of an object with only whitelisted keys.', function(done) {
    var source = {a: true, b: true, c: true, d: true};

    pick(['a', 'c'], source).apply(function(copy) {
      expect(copy).to.deep.equal({a: true, c: true});
      done();
    });
  });
});
