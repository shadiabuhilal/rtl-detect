'use strict';

var intlLang = require('./lib/intl-lang');

module.exports = {

    getLang: intlLang.getLang,

    getCountryCode: intlLang.getCountryCode,

    isRtlLang: intlLang.isRtlLang,

    getLangDir: intlLang.getLangDir,

    getIntl: intlLang.getIntl,

    getAcceptLangIntls: intlLang.getAcceptLangIntls,

    getAcceptLangIntl: intlLang.getAcceptLangIntl

};
