# dinli [![npm](https://img.shields.io/npm/v/dinli.svg)](http://npmjs.com/package/dinli) [![npm](https://img.shields.io/npm/dm/dinli.svg)](http://npmjs.com/package/dinli) [![npm](https://img.shields.io/npm/l/dinli.svg)](LICENSE)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Wrapper for the [Dinli](https://din.li) URL Shortener

**Requires Node 6+**

## Install

```sh
npm i -S dinli
```

## Use

```js
const dinli = require('dinli')

dinli('https://www.google.com/').then(result => {
  result.id // A1b2C3d4
  result.shortUrl // https://din.li/A1b2C3d4
})
```

## License
MIT Copyright © Diego Rodríguez Baquero
