# min-prefix-length [![Build Status](https://travis-ci.org/brh55/min-prefix-length.svg?branch=master)](https://travis-ci.org/brh55/min-prefix-length) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)

> Calculate the minimum prefix length for an IPv4 subnet based on a desired number of host accounting for broadcast and network addresses
>
> *minPrefixLength(8) => 28*

## Install

```
$ npm install --save min-prefix-length
```


## Usage

```js
const minPrefixLength = require('min-prefix-length');

const prefix = minPrefixLength(28);
const CIDR = `192.168.1.0/${prefix}`
console.log(CIDR)
// => "192.168.1.0/28"
```

## API

### minPrefixLength(n)

Returns the minimum prefix length needed to support *n* of hosts accounting for the network and broadcast address

#### n

Type: `number`

*n* number of desired hosts

## Related
:computer: - [min-host-bits](https://github.com/brh55/min-host-bits) - Calculate minimum host bits needed for desired number of hosts

## License

MIT © [Brandon Him](https://github.com/brh55)
