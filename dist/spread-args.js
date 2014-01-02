/*! spread-args 0.1.0 Original author Alan Plum <me@pluma.io>. Released into the Public Domain under CC0. @preserve */
module.exports = spread;

function spread(fn) {
  return function(args) {
    return fn.apply(this, args.concat(
      Array.prototype.slice.call(arguments, 1)
    ));
  };
}
