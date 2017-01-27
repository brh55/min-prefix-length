'use strict';
const minHostBits = require('min-host-bits');

module.exports = (n) => {
    return 32 - minHostBits(n);
};
