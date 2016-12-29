# babel-preset-es2015-ie8
A preset for IE8 project for with babel

# features
- react compatible
- ie8 compatible

## Install

```sh
$ npm install --save-dev babel-preset-es2015-ie8
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["es2015-ie8"]
}
```

### Via CLI

```sh
$ babel script.js --presets es2015-ie8
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["es2015-ie8"]
});
```


