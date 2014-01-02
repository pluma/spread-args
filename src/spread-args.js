module.exports = spread;

function spread(fn) {
  return function(args) {
    return fn.apply(this, args.concat(
      Array.prototype.slice.call(arguments, 1)
    ));
  };
}
