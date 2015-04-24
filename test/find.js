var expect = require('chai').expect;
var find = require('../find');

describe('find', function() {
  var list = [{age: 1}, {name: 'Alice'}, {name: 'Bob'}];

  describe('given the predicate is true for an item in the array', function() {
    it('should return the first such item.', function() {
      var hasName = function hasName(o) {
        return o.hasOwnProperty('name');
      };
      expect(find(hasName, list)).to.deep.equal({name: 'Alice'});
    });
  });

  describe('given the predicate is false for all items in the array', function() {
    it('should return undefined.', function() {
      var hasHeight = function hasHeight(o) {
        return o.hasOwnProperty('height');
      };
      expect(find(hasHeight, list)).to.equal(undefined);
    });
  });

  describe('given no list', function() {
    it('should return undefined.', function() {
      expect(find(function() {return true;}, null)).to.equal(undefined);
    });
  });

  describe('given an empty list', function() {
    it('should return undefined.', function() {
      expect(find(function() {return true;}, [])).to.equal(undefined);
    });
  });
});
