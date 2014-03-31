/*global describe, it */
var expect = require('expect.js'),
  unspread = require('../').unspread;

describe('unspread', function() {
  it('returns a function', function() {
    expect(unspread()).to.be.a('function');
  });
  it('unspreads arguments to the wrapped function', function(done) {
    unspread(function(arr) {
      expect(arguments.length).to.equal(1);
      expect(arr).to.eql([0, 1, 2]);
      done();
    })(0, 1, 2);
  });
  it('invokes the wrapped function with its context', function() {
    var self = {};
    unspread(function() {
      expect(this).to.equal(self);
    }).call(self);
  });
});
