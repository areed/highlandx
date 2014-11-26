var expect = require('chai').expect;
var isURL = require('../isURL');

describe('isURL', function() {
  it('should return true for valid absolute URLs.', function() {
    expect(isURL('http://example.com')).to.equal(true);
    expect(isURL('somethingelse')).to.equal(false);
  });
});
