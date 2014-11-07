var expect = require('chai').expect;
var existy = require('../existy');

describe('existy', function() {
  var o = {prop: true, prop1: null, prop2: undefined};

  var table = [
    //value, result
    [null, false],
    [undefined, false],
    [o.prop1, false],
    [o.prop2, false],
    [o.prop3, false],
    [o.prop, true],
    [false, true],
    ['0', true],
    [0, true],
    ['', true],
    [1, true],
    [o, true],
    [true, true]
  ];

  it('should return true unless the value is strictly null or undefined', function() {
    table.forEach(function(r) {
      expect(existy(r[0])).to.equal(r[1]);
    });
  });
});
