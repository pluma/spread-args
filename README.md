# Synopsis

**spread-args** is a JavaScript function for converting a function accepting multiple arguments into a function accepting a single array of arguments.

[![stability 5 - locked](http://b.repl.ca/v1/stability-5_--_locked-blue.png)](http://nodejs.org/api/documentation.html#documentation_stability_index) [![license - Unlicense](http://b.repl.ca/v1/license-Unlicense-lightgrey.png)](http://unlicense.org/) [![Flattr this](https://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=pluma&url=https://github.com/pluma/spread-args)

[![browser support](https://ci.testling.com/pluma/spread-args.png)](https://ci.testling.com/pluma/spread-args)

[![Build Status](https://travis-ci.org/pluma/spread-args.png?branch=master)](https://travis-ci.org/pluma/spread-args) [![Coverage Status](https://coveralls.io/repos/pluma/spread-args/badge.png?branch=master)](https://coveralls.io/r/pluma/spread-args?branch=master) [![Dependencies](https://david-dm.org/pluma/spread-args.png?theme=shields.io)](https://david-dm.org/pluma/spread-args)

[![NPM status](https://nodei.co/npm/spread-args.png?compact=true)](https://npmjs.org/package/spread-args)

# Why?

It's trivial to implement, but in order to keep code DRY (and avoid silly mistakes) it makes sense to define this function only once per project. This library is the logical consequence of that.

# Install

## Node.js

### With NPM

```sh
npm install spread-args
```

### From source

```sh
git clone https://github.com/pluma/spread-args.git
cd spread-args
npm install
make
```

## Browser

### With component

```sh
component install pluma/spread-args
```

[Learn more about component](https://github.com/component/component).

### With bower

```sh
bower install spread
```

[Learn more about bower](https://github.com/twitter/bower).

### With a CommonJS module loader

Download the [latest minified CommonJS release](https://raw.github.com/pluma/spread-args/master/dist/spread-args.min.js) and add it to your project.

[Learn more about CommonJS modules](http://wiki.commonjs.org/wiki/Modules/1.1).

### With an AMD module loader

Download the [latest minified AMD release](https://raw.github.com/pluma/spread-args/master/dist/spread-args.amd.min.js) and add it to your project.

[Learn more about AMD modules](http://requirejs.org/docs/whyamd.html).

### As a standalone library

Download the [latest minified standalone release](https://raw.github.com/pluma/spread-args/master/dist/spread-args.globals.min.js) and add it to your project.

```html
<script src="/your/js/path/spread-args.globals.min.js"></script>
```

This makes the `spread-args` function available in the global namespace.

# Basic usage example

```javascript
var spread = require('spread-args');

var str = 'foo bar qux baz';
[
    [/o+/g, 'u'],
    [/a/g, 'o']
].forEach(spread(function(re, substitute) {
    str = str.replace(re, substitute);
}));
console.log(str); // "fu bor qux boz"
```

# API

## spread(fn:Function):Function

Wraps the given function in a function that accepts an array as first argument and invokes the wrapped function with the array's contents as arguments.

If the returned function is invoked as a method, the `this` reference will be used to invoke the function.

If the returned function is passed additional arguments, they will be passed on as usual.

Example:

```javascript
var spread = require('spread-args');

function join(a, b, c) {
    return [a, b].join(c || '');
}

var join2 = spread(join);

join2(['foo', 'bar']); // 'foobar'
join2(['foo', 'bar', '-']); // 'foo-bar'
join2(['foo', 'bar'], '-'); // 'foo-bar'
```

## spread.unspread(fn:Function):Function

Wraps the given function in a function that accepts any number of arguments and invokes the wrapped function with an array containing the arguments.

If the returned function is invoked as a method, the `this` reference will be used to invoke the function.

Example:

```javascript
var unspread = require('spread-args').unspread;

function join(arr) {
    return arr.join('-');
}

var join2 = unspread(join);

join2('foo', 'bar'); // 'foo-bar'
```

# Unlicense

This is free and unencumbered public domain software. For more information, see http://unlicense.org/ or the accompanying [UNLICENSE](https://github.com/pluma/spread-args/blob/master/UNLICENSE) file.