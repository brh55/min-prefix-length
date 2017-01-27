'use strict';
const minHostBits = require('min-host-bits');

module.exports = n =>
	32 - minHostBits(n);
