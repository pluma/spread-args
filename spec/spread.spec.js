/*global describe, it */
var expect = require('expect.js'),
  spread = require('../');

describe('spread', function() {
  it('returns a function', function() {
    expect(spread()).to.be.a('function');
  });
  it('spreads argument to the wrapped function', function(done) {
    spread(function(zero, one, two) {
      expect(arguments.length).to.equal(3);
      expect(zero).to.equal(0);
      expect(one).to.equal(1);
      expect(two).to.equal(2);
      done();
    })([0, 1, 2]);
  });
  it('appends additional arguments without modifying the array', function(done) {
    var args = [0, 1];
    spread(function(foo, bar, qux) {
      expect(foo).to.equal(0);
      expect(bar).to.equal(1);
      expect(qux).to.equal(2);
      expect(args).to.eql([0, 1]);
      done();
    })([0, 1], 2);
  });
});
