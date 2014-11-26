var expect = require('chai').expect;
var isEmpty = require('../isEmpty');

describe('isEmpty', function() {
  describe('when called on an empty object', function() {
    it('should return true.', function() {
      expect(isEmpty({})).to.equal(true);
      var proto = {prop: 'hi'};
      var o = Object.create(proto);
      expect(isEmpty(o)).to.equal(true);
    });
  });

  describe('when called on a non-empty object', function() {
    it('should return fasle.', function() {
      expect(isEmpty({prop: 'hi'})).to.equal(false);
    });
  });
});
