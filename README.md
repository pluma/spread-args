# Synopsis

**spread-args** is a JavaScript function for converting a function accepting multiple arguments into a function accepting a single array of arguments.

[![browser support](https://ci.testling.com/pluma/spread-args.png)](https://ci.testling.com/pluma/spread-args)

[![Build Status](https://travis-ci.org/pluma/spread-args.png?branch=master)](https://travis-ci.org/pluma/spread-args) [![NPM version](https://badge.fury.io/js/spread-args.png)](http://badge.fury.io/js/spread-args) [![Dependencies](https://david-dm.org/pluma/spread-args.png)](https://david-dm.org/pluma/spread-args)

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

Wraps the given function in a function that accepts an array as first argument.

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

# Unlicense

This is free and unencumbered public domain software. For more information, see http://unlicense.org/ or the accompanying [UNLICENSE](https://github.com/pluma/spread-args/blob/master/UNLICENSE) file.