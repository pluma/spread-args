LICENSE_COMMENT="/*! spread-args 0.1.2 Original author Alan Plum <me@pluma.io>. Released into the Public Domain under the UNLICENSE. @preserve */"

cover: lint
	@./node_modules/.bin/istanbul cover -x "**/spec/**" \
		./node_modules/mocha/bin/_mocha --report lcov spec/ -- -R spec

coveralls:
	@./node_modules/.bin/istanbul cover -x "**/spec/**" \
		./node_modules/mocha/bin/_mocha --report lcovonly spec/ -- -R spec && \
		cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
	@rm -rf ./coverage

test: lint
	@./node_modules/.bin/mocha \
		--growl \
		--reporter spec \
		spec/*.spec.js

clean:
	@rm -f 	dist/*

dist/spread-args.js:
	@echo $(LICENSE_COMMENT) > dist/spread-args.js
	@cat src/spread-args.js >> dist/spread-args.js

dist/spread-args.globals.js:
	@echo $(LICENSE_COMMENT) > dist/spread-args.globals.js
	@echo "(function(root){\
	var require=function(key){return root[key];},\
	module={};" >> dist/spread-args.globals.js
	@cat src/spread-args.js >> dist/spread-args.globals.js
	@echo "root.spread-args = module.exports;\
	}(this));" >> dist/spread-args.globals.js

dist/spread-args.amd.js:
	@echo $(LICENSE_COMMENT) > dist/spread-args.amd.js
	@echo "define(function(require, exports, module) {" >> dist/spread-args.amd.js
	@cat src/spread-args.js >> dist/spread-args.amd.js
	@echo "return module.exports;});" >> dist/spread-args.amd.js

dist/spread-args.min.js: dist/spread-args.js
	@./node_modules/.bin/uglifyjs dist/spread-args.js --comments -m > dist/spread-args.min.js

dist/spread-args.globals.min.js: dist/spread-args.globals.js
	@./node_modules/.bin/uglifyjs dist/spread-args.globals.js --comments -m > dist/spread-args.globals.min.js

dist/spread-args.amd.min.js: dist/spread-args.amd.js
	@./node_modules/.bin/uglifyjs dist/spread-args.amd.js --comments > dist/spread-args.amd.min.js

dist: clean dist/spread-args.min.js dist/spread-args.globals.min.js dist/spread-args.amd.min.js

lint:
	@./node_modules/.bin/jshint src/spread-args.js spec
