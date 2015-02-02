//Copyright 2015, Yahoo! Inc.
'use strict';

var rtlDetect = require('./lib/rtl-detect');

module.exports = {

    isRtlLang: rtlDetect.isRtlLang,

    getLangDir: rtlDetect.getLangDir,

};
