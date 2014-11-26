var expect = require('chai').expect;
var yes = require('../yes');

describe('yes', function() {
  it('should always return true.', function() {
    expect(yes(false)).to.equal(true);
  });
});
