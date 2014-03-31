/*! spread-args 0.1.2 Original author Alan Plum <me@pluma.io>. Released into the Public Domain under the UNLICENSE. @preserve */
module.exports = spread;
spread.unspread = unspread;

function spread(fn) {
  return function(args) {
    return fn.apply(this, args.concat(
      Array.prototype.slice.call(arguments, 1)
    ));
  };
}

function unspread(fn) {
  return function() {
    return fn.call(this, Array.prototype.slice.call(arguments, 0));
  };
}