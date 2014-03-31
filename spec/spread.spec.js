/*global describe, it */
var expect = require('expect.js'),
  spread = require('../');

describe('spread', function() {
  it('returns a function', function() {
    expect(spread()).to.be.a('function');
  });
  it('spreads argument to the wrapped function', function() {
    spread(function(zero, one, two) {
      expect(arguments.length).to.equal(3);
      expect(zero).to.equal(0);
      expect(one).to.equal(1);
      expect(two).to.equal(2);
    })([0, 1, 2]);
  });
  it('appends additional arguments without modifying the array', function() {
    var args = [0, 1];
    spread(function(foo, bar, qux) {
      expect(foo).to.equal(0);
      expect(bar).to.equal(1);
      expect(qux).to.equal(2);
      expect(args).to.eql([0, 1]);
    })([0, 1], 2);
  });
  it('invokes the wrapped function with its context', function() {
    var self = {};
    spread(function() {
      expect(this).to.equal(self);
    }).call(self, []);
  });
});
