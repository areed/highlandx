var expect = require('chai').expect;
var no = require('../no');

describe('no', function() {
  it('should always return false.', function() {
    expect(no(true)).to.equal(false);
  });
});
