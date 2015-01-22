'use strict';

var IntlLang = require('../../' + 'lib/intl-lang');

var assert = require('chai').assert;

describe('intl-lang', function() {

    describe('public', function() {

        it('getLang()', function () {
            var strIn, out;

            out = IntlLang.getLang(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = IntlLang.getLang(strIn);
            assert.isUndefined(out);

            strIn = '';
            out = IntlLang.getLang(strIn);
            assert.isUndefined(out);

            strIn = ' ';
            out = IntlLang.getLang(strIn);
            assert.isUndefined(out);

            strIn = '1234';
            out = IntlLang.getLang(strIn);
            assert.isUndefined(out);

            strIn = 'en';
            out = IntlLang.getLang(strIn);
            assert.strictEqual(out, 'en');

            strIn = 'EN';
            out = IntlLang.getLang(strIn);
            assert.strictEqual(out, 'en');

            strIn = 'en-US';
            out = IntlLang.getLang(strIn);
            assert.strictEqual(out, 'en');

            strIn = 'EN-US';
            out = IntlLang.getLang(strIn);
            assert.strictEqual(out, 'en');
        });

        it('getCountryCode()', function () {
            var strIn, out;

            out = IntlLang.getCountryCode(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = IntlLang.getCountryCode(strIn);
            assert.isUndefined(out);

            strIn = '';
            out = IntlLang.getCountryCode(strIn);
            assert.isUndefined(out);

            strIn = ' ';
            out = IntlLang.getCountryCode(strIn);
            assert.isUndefined(out);

            strIn = '1234';
            out = IntlLang.getCountryCode(strIn);
            assert.isUndefined(out);

            strIn = 'en';
            out = IntlLang.getCountryCode(strIn);
            assert.isUndefined(out);

            strIn = 'EN';
            out = IntlLang.getCountryCode(strIn);
            assert.isUndefined(out);

            strIn = 'en-us';
            out = IntlLang.getCountryCode(strIn);
            assert.strictEqual(out, 'US');

            strIn = 'en-US';
            out = IntlLang.getCountryCode(strIn);
            assert.strictEqual(out, 'US');

            strIn = 'en_US';
            out = IntlLang.getCountryCode(strIn);
            assert.strictEqual(out, 'US');

            strIn = 'EN-US';
            out = IntlLang.getCountryCode(strIn);
            assert.strictEqual(out, 'US');
        });

        it('isRtlLang()', function () {
            var strIn, out;

            out = IntlLang.isRtlLang(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = IntlLang.isRtlLang(strIn);
            assert.isUndefined(out);

            strIn = '';
            out = IntlLang.isRtlLang(strIn);
            assert.isUndefined(out);

            strIn = ' ';
            out = IntlLang.isRtlLang(strIn);
            assert.isUndefined(out);

            strIn = '1234';
            out = IntlLang.isRtlLang(strIn);
            assert.isUndefined(out)

            strIn = 'en';
            out = IntlLang.isRtlLang(strIn);
            assert.strictEqual(out, false);

            strIn = 'EN';
            out = IntlLang.isRtlLang(strIn);
            assert.strictEqual(out, false);

            strIn = 'en-US';
            out = IntlLang.isRtlLang(strIn);
            assert.strictEqual(out, false);

            strIn = 'en_US';
            out = IntlLang.isRtlLang(strIn);
            assert.strictEqual(out, false);

            strIn = 'en-us';
            out = IntlLang.isRtlLang(strIn);
            assert.strictEqual(out, false);

            strIn = 'ar';
            out = IntlLang.isRtlLang(strIn);
            assert.strictEqual(out, true);

            strIn = 'AR';
            out = IntlLang.isRtlLang(strIn);
            assert.strictEqual(out, true);

            strIn = 'ar-jo';
            out = IntlLang.isRtlLang(strIn);
            assert.strictEqual(out, true);

            strIn = 'ar-JO';
            out = IntlLang.isRtlLang(strIn);
            assert.strictEqual(out, true);

            strIn = 'ar_JO';
            out = IntlLang.isRtlLang(strIn);
            assert.strictEqual(out, true);

        });

        it('getLangDir()', function () {
            var strIn, out;

            out = IntlLang.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = null;
            out = IntlLang.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = '';
            out = IntlLang.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = ' ';
            out = IntlLang.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = '1234';
            out = IntlLang.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = 'en';
            out = IntlLang.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = 'EN';
            out = IntlLang.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = 'en-US';
            out = IntlLang.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = 'en_US';
            out = IntlLang.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = 'en-us';
            out = IntlLang.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = 'ar';
            out = IntlLang.getLangDir(strIn);
            assert.strictEqual(out, 'rtl');

            strIn = 'AR';
            out = IntlLang.getLangDir(strIn);
            assert.strictEqual(out, 'rtl');

            strIn = 'ar-jo';
            out = IntlLang.getLangDir(strIn);
            assert.strictEqual(out, 'rtl');

            strIn = 'ar-JO';
            out = IntlLang.getLangDir(strIn);
            assert.strictEqual(out, 'rtl');

            strIn = 'ar_JO';
            out = IntlLang.getLangDir(strIn);
            assert.strictEqual(out, 'rtl');
        });

        it('getIntl()', function () {
            var strIn, out;

            out = IntlLang.getIntl(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = IntlLang.getIntl(strIn);
            assert.isUndefined(out);

            strIn = '';
            out = IntlLang.getIntl(strIn);
            assert.isUndefined(out);

            strIn = ' ';
            out = IntlLang.getIntl(strIn);
            assert.isUndefined(out);

            strIn = '1234';
            out = IntlLang.getIntl(strIn);
            assert.isUndefined(out);

            strIn = 'en';
            out = IntlLang.getIntl(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.isUndefined(out.countryCode);
            assert.strictEqual(out.hyphenFormat, 'en');
            assert.strictEqual(out.underscoreFormat, 'en');
            assert.strictEqual(out.langDir, 'ltr');
            assert.strictEqual(out.isRtlLang, false);

            strIn = 'en-US';
            out = IntlLang.getIntl(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'US');
            assert.strictEqual(out.hyphenFormat, 'en-US');
            assert.strictEqual(out.underscoreFormat, 'en_US');
            assert.strictEqual(out.langDir, 'ltr');
            assert.strictEqual(out.isRtlLang, false);

            strIn = 'en_US';
            out = IntlLang.getIntl(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'US');
            assert.strictEqual(out.hyphenFormat, 'en-US');
            assert.strictEqual(out.underscoreFormat, 'en_US');
            assert.strictEqual(out.langDir, 'ltr');
            assert.strictEqual(out.isRtlLang, false);


            strIn = 'en-us';
            out = IntlLang.getIntl(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'US');
            assert.strictEqual(out.hyphenFormat, 'en-US');
            assert.strictEqual(out.underscoreFormat, 'en_US');
            assert.strictEqual(out.langDir, 'ltr');
            assert.strictEqual(out.isRtlLang, false);

            strIn = 'EN-US';
            out = IntlLang.getIntl(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'US');
            assert.strictEqual(out.hyphenFormat, 'en-US');
            assert.strictEqual(out.underscoreFormat, 'en_US');
            assert.strictEqual(out.langDir, 'ltr');
            assert.strictEqual(out.isRtlLang, false);

            strIn = 'ar';
            out = IntlLang.getIntl(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'ar');
            assert.isUndefined(out.countryCode);
            assert.strictEqual(out.hyphenFormat, 'ar');
            assert.strictEqual(out.underscoreFormat, 'ar');
            assert.strictEqual(out.langDir, 'rtl');
            assert.strictEqual(out.isRtlLang, true);

            strIn = 'ar-JO';
            out = IntlLang.getIntl(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'ar');
            assert.strictEqual(out.countryCode, 'JO');
            assert.strictEqual(out.hyphenFormat, 'ar-JO');
            assert.strictEqual(out.underscoreFormat, 'ar_JO');
            assert.strictEqual(out.langDir, 'rtl');
            assert.strictEqual(out.isRtlLang, true);

            strIn = 'ar_JO';
            out = IntlLang.getIntl(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'ar');
            assert.strictEqual(out.countryCode, 'JO');
            assert.strictEqual(out.hyphenFormat, 'ar-JO');
            assert.strictEqual(out.underscoreFormat, 'ar_JO');
            assert.strictEqual(out.langDir, 'rtl');
            assert.strictEqual(out.isRtlLang, true);

            strIn = 'ar-jo';
            out = IntlLang.getIntl(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'ar');
            assert.strictEqual(out.countryCode, 'JO');
            assert.strictEqual(out.hyphenFormat, 'ar-JO');
            assert.strictEqual(out.underscoreFormat, 'ar_JO');
            assert.strictEqual(out.langDir, 'rtl');
            assert.strictEqual(out.isRtlLang, true);

            strIn = 'AR-JO';
            out = IntlLang.getIntl(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'ar');
            assert.strictEqual(out.countryCode, 'JO');
            assert.strictEqual(out.hyphenFormat, 'ar-JO');
            assert.strictEqual(out.underscoreFormat, 'ar_JO');
            assert.strictEqual(out.langDir, 'rtl');
            assert.strictEqual(out.isRtlLang, true);

        });

        it('getAcceptLangIntls()', function () {
            var req, out;

            out = IntlLang.getAcceptLangIntls(req);
            assert.isUndefined(out);

            req = null;
            out = IntlLang.getAcceptLangIntls(req);
            assert.isUndefined(out);

            req = {};
            out = IntlLang.getAcceptLangIntls(req);
            assert.isUndefined(out);

            req = {
                headers: null
            };
            out = IntlLang.getAcceptLangIntls(req);
            assert.isUndefined(out);

            req = {
                headers: {}
            };
            out = IntlLang.getAcceptLangIntls(req);
            assert.isUndefined(out);

            req = {
                headers: {
                    'accept-language': null
                }
            };
            out = IntlLang.getAcceptLangIntls(req);
            assert.isUndefined(out);

            req = {
                headers: {
                    'accept-language': 'en-US,en;q=0.8,ar-JO;q=0.6'
                }
            };
            out = IntlLang.getAcceptLangIntls(req);
            assert.isArray(out);
            assert.lengthOf(out, 3);
            assert.isObject(out[0]);
            assert.strictEqual(out[0].lang, 'en');
            assert.strictEqual(out[0].countryCode, 'US');
            assert.strictEqual(out[0].hyphenFormat, 'en-US');
            assert.strictEqual(out[0].underscoreFormat, 'en_US');
            assert.strictEqual(out[0].langDir, 'ltr');
            assert.strictEqual(out[0].isRtlLang, false);
            assert.strictEqual(out[0].score, 1);
            assert.isObject(out[1]);
            assert.strictEqual(out[1].lang, 'en');
            assert.isUndefined(out[1].countryCode);
            assert.strictEqual(out[1].hyphenFormat, 'en');
            assert.strictEqual(out[1].underscoreFormat, 'en');
            assert.strictEqual(out[1].langDir, 'ltr');
            assert.strictEqual(out[1].isRtlLang, false);
            assert.strictEqual(out[1].score, 0.8);
            assert.isObject(out[2]);
            assert.strictEqual(out[2].lang, 'ar');
            assert.strictEqual(out[2].countryCode, 'JO');
            assert.strictEqual(out[2].hyphenFormat, 'ar-JO');
            assert.strictEqual(out[2].underscoreFormat, 'ar_JO');
            assert.strictEqual(out[2].langDir, 'rtl');
            assert.strictEqual(out[2].isRtlLang, true);
            assert.strictEqual(out[2].score, 0.6);

        });

        it('getAcceptLangIntl()', function () {
            var req, conf, out;

            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isUndefined(out);

            req = null;
            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isUndefined(out);

            req = {};
            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isUndefined(out);

            req = {
                headers: null
            };
            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isUndefined(out);

            req = {
                headers: {}
            };
            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isUndefined(out);

            req = {
                headers: {
                    'accept-language': null
                }
            };
            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isUndefined(out);

            req = {
                headers: {
                    'accept-language': 'en-US,en;q=0.8,ar-JO;q=0.6'
                }
            };
            conf = {
                checkBy: 'lang',
                supported: ['en','en-GB']
            };
            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'US');
            assert.strictEqual(out.hyphenFormat, 'en-US');
            assert.strictEqual(out.underscoreFormat, 'en_US');
            assert.strictEqual(out.langDir, 'ltr');
            assert.strictEqual(out.isRtlLang, false);
            assert.strictEqual(out.score, 1);

            req = {
                headers: {
                    'accept-language': 'ar-JO,en;q=0.8,en-GB;q=0.6,es;q'
                }
            };
            conf = {
                checkBy: 'lang',
                supported: ['ar','en-GB']
            };
            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'ar');
            assert.strictEqual(out.countryCode, 'JO');
            assert.strictEqual(out.hyphenFormat, 'ar-JO');
            assert.strictEqual(out.underscoreFormat, 'ar_JO');
            assert.strictEqual(out.langDir, 'rtl');
            assert.strictEqual(out.isRtlLang, true);
            assert.strictEqual(out.score, 1);


            req = {
                headers: {
                    'accept-language': 'ar-JO,en;q=0.8,en-GB;q=0.6,es;q'
                }
            };
            conf = {};
            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isUndefined(out);

            req = {
                headers: {
                    'accept-language': 'ar-JO,en;q=0.8,en-GB;q=0.6,es;q'
                }
            };
            conf = ['ar','en-GB'];
            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'ar');
            assert.strictEqual(out.countryCode, 'JO');
            assert.strictEqual(out.hyphenFormat, 'ar-JO');
            assert.strictEqual(out.underscoreFormat, 'ar_JO');
            assert.strictEqual(out.langDir, 'rtl');
            assert.strictEqual(out.isRtlLang, true);
            assert.strictEqual(out.score, 1);

            req = {
                headers: {
                    'accept-language': 'ar-JO,en;q=0.8,en-GB;q=0.6,es;q'
                }
            };
            conf = {
                checkBy: 'lang',
                supported: ['ar','en-GB']
            };
            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'ar');
            assert.strictEqual(out.countryCode, 'JO');
            assert.strictEqual(out.hyphenFormat, 'ar-JO');
            assert.strictEqual(out.underscoreFormat, 'ar_JO');
            assert.strictEqual(out.langDir, 'rtl');
            assert.strictEqual(out.isRtlLang, true);
            assert.strictEqual(out.score, 1);

            req = {
                headers: {
                    'accept-language': 'ar-JO,en;q=0.8,en-GB;q=0.6,es;q'
                }
            };
            conf = {
                checkBy: 'intl',
                supported: ['ar','en-GB']
            };
            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'GB');
            assert.strictEqual(out.hyphenFormat, 'en-GB');
            assert.strictEqual(out.underscoreFormat, 'en_GB');
            assert.strictEqual(out.langDir, 'ltr');
            assert.strictEqual(out.isRtlLang, false);
            assert.strictEqual(out.score, 0.6);


            req = {
                headers: {
                    'accept-language': 'ar-JO,en;q=0.8,en-GB;q=0.6,es;q'
                }
            };
            conf = {
                checkBy: 'intl',
                supported: 'ar,en-GB'
            };
            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'GB');
            assert.strictEqual(out.hyphenFormat, 'en-GB');
            assert.strictEqual(out.underscoreFormat, 'en_GB');
            assert.strictEqual(out.langDir, 'ltr');
            assert.strictEqual(out.isRtlLang, false);
            assert.strictEqual(out.score, 0.6);

            req = {
                headers: {
                    'accept-language': 'ar-JO,en;q=0.8,en-GB;q=0.6'
                }
            };
            conf = {
                checkBy: 'intl',
                supported: 'es'
            };
            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isUndefined(out);

            req = {
                headers: {
                    'accept-language': 'en,es;q=0.8,en-GB;q=0.6'
                }
            };
            conf = {
                checkBy: 'lang',
                supported: ['en','en-GB']
            };
            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.isUndefined(out.countryCode);
            assert.strictEqual(out.hyphenFormat, 'en');
            assert.strictEqual(out.underscoreFormat, 'en');
            assert.strictEqual(out.langDir, 'ltr');
            assert.strictEqual(out.isRtlLang, false);
            assert.strictEqual(out.score, 1);

            req = {
                headers: {
                    'accept-language': 'en,es;q=0.8,en-GB;q=0.6'
                }
            };
            conf = {
                checkBy: 'intl',
                supported: ['ar','en-GB']
            };
            out = IntlLang.getAcceptLangIntl(req, conf);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'GB');
            assert.strictEqual(out.hyphenFormat, 'en-GB');
            assert.strictEqual(out.underscoreFormat, 'en_GB');
            assert.strictEqual(out.langDir, 'ltr');
            assert.strictEqual(out.isRtlLang, false);
            assert.strictEqual(out.score, 0.6);
        });

    });

});
