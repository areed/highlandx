var expect = require('chai').expect;
var groupBy = require('../groupBy');

describe('groupBy', function() {
  var grouper = function(item) {
    return item.label;
  };
  var list = [
    {label: 'a', value: 0},
    {label: 'b', value: 1},
    {label: 'c', value: 2},
    {label: 'a', value: 3},
    {label: 'b', value: 4},
    {label: 'c', value: 5},
  ];

  it('should group the items.', function() {
    var output = groupBy(grouper, list);

    expect(groupBy(grouper, list)).to.deep.equal({
      'a': [{label: 'a', value: 0}, {label: 'a', value: 3}],
      'b': [{label: 'b', value: 1}, {label: 'b', value: 4}],
      'c': [{label: 'c', value: 2}, {label: 'c', value: 5}],
    });
  });
});
