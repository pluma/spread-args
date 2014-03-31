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