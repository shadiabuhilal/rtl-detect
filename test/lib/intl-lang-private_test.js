'use strict';

var IntlLang = require('../../' + 'lib/intl-lang');

var assert = require('chai').assert;

describe('intl-lang', function() {

    describe('private', function() {

        it('_escapeRegExpPattern()', function () {
            var strIn, out;

            out = IntlLang._escapeRegExpPattern(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = IntlLang._escapeRegExpPattern(strIn);
            assert.isNull(out);

            strIn = '';
            out = IntlLang._escapeRegExpPattern(strIn);
            assert.strictEqual(out, '');

            strIn = ' ';
            out = IntlLang._escapeRegExpPattern(strIn);
            assert.strictEqual(out, ' ');

            strIn = '[CODE]';
            out = IntlLang._escapeRegExpPattern(strIn);
            assert.strictEqual(out, '\\[CODE\\]');

            strIn = '.*+^$[]()|{},-:?\\';
            out = IntlLang._escapeRegExpPattern(strIn);
            assert.strictEqual(out, '\\.\\*\\+\\^\\$\\[\\]\\(\\)\\|\\{\\}\\,\\-\\:\\?\\\\');

        });

        it('_toLowerCase()', function () {
            var strIn, out;

            out = IntlLang._toLowerCase(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = IntlLang._toLowerCase(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = IntlLang._toLowerCase(strIn, true);
            assert.isNull(out);

            strIn = '';
            out = IntlLang._toLowerCase(strIn);
            assert.strictEqual(out, '');

            strIn = ' ';
            out = IntlLang._toLowerCase(strIn);
            assert.strictEqual(out, ' ');

            strIn = 'Test Code';
            out = IntlLang._toLowerCase(strIn);
            assert.strictEqual(out, 'test code');

            strIn = 'TEST CODE';
            out = IntlLang._toLowerCase(strIn);
            assert.strictEqual(out, 'test code');

            strIn = 'test code';
            out = IntlLang._toLowerCase(strIn);
            assert.strictEqual(out, 'test code');
        });

        it('_toUpperCase()', function () {
            var strIn, out;

            out = IntlLang._toUpperCase(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = IntlLang._toUpperCase(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = IntlLang._toUpperCase(strIn, true);
            assert.isNull(out);


            strIn = '';
            out = IntlLang._toUpperCase(strIn);
            assert.strictEqual(out, '');

            strIn = ' ';
            out = IntlLang._toUpperCase(strIn);
            assert.strictEqual(out, ' ');

            strIn = 'Test Code';
            out = IntlLang._toUpperCase(strIn);
            assert.strictEqual(out, 'TEST CODE');

            strIn = 'TEST CODE';
            out = IntlLang._toUpperCase(strIn);
            assert.strictEqual(out, 'TEST CODE');

            strIn = 'test code';
            out = IntlLang._toUpperCase(strIn);
            assert.strictEqual(out, 'TEST CODE');

        });

        it('_trim()', function () {
            var strIn, out;

            out = IntlLang._trim(strIn);
            assert.isUndefined(out);

            out = IntlLang._trim(strIn, '-');
            assert.isUndefined(out);

            strIn = null;
            out = IntlLang._trim(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = IntlLang._trim(strIn, true);
            assert.isNull(out);

            strIn = null;
            out = IntlLang._trim(strIn, '-', true);
            assert.isNull(out);

            strIn = null;
            out = IntlLang._trim(strIn, '-');
            assert.isUndefined(out);


            strIn = '';
            out = IntlLang._trim(strIn);
            assert.strictEqual(out, '');

            out = IntlLang._trim(strIn, '-');
            assert.strictEqual(out, '');


            strIn = ' ';
            out = IntlLang._trim(strIn);
            assert.strictEqual(out, '');

            strIn = '-';
            out = IntlLang._trim(strIn, '-');
            assert.strictEqual(out, '');


            strIn = '  TRIM CODE  ';
            out = IntlLang._trim(strIn);
            assert.strictEqual(out, 'TRIM CODE');

            strIn = '-TRIM-CODE-';
            out = IntlLang._trim(strIn, '-');
            assert.strictEqual(out, 'TRIM-CODE');

            strIn = '-_TRIM-_CODE_-';
            out = IntlLang._trim(strIn, ['-', '_']);
            assert.strictEqual(out, 'TRIM-_CODE');

        });

        it('_parseIntl()', function () {
            var strIn, out;

            out = IntlLang._parseIntl(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = IntlLang._parseIntl(strIn);
            assert.isUndefined(out);

            strIn = '';
            out = IntlLang._parseIntl(strIn);
            assert.isUndefined(out);

            strIn = ' ';
            out = IntlLang._parseIntl(strIn);
            assert.isUndefined(out);

            strIn = '1234';
            out = IntlLang._parseIntl(strIn);
            assert.isUndefined(out);

            strIn = 'en';
            out = IntlLang._parseIntl(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.isUndefined(out.countryCode);

            strIn = 'en-US';
            out = IntlLang._parseIntl(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'US');

            strIn = 'en_US';
            out = IntlLang._parseIntl(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'US');


            strIn = 'en-us';
            out = IntlLang._parseIntl(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'US');

            strIn = 'EN-US';
            out = IntlLang._parseIntl(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'US');

        });

        it('_checkIntl()', function () {
            var conf, acceptLangIntl, supportedIntl, out;

            out = IntlLang._checkIntlIsSupported( acceptLangIntl, supportedIntl, conf);
            assert.isUndefined(out);

            acceptLangIntl = null;
            supportedIntl = null;
            out = IntlLang._checkIntlIsSupported(acceptLangIntl, supportedIntl, conf);
            assert.isUndefined(out);

            acceptLangIntl = '';
            supportedIntl = '';
            out = IntlLang._checkIntlIsSupported(acceptLangIntl, supportedIntl, conf);
            assert.isUndefined(out);

            acceptLangIntl = {
                lang: 'en',
                countryCode: 'GB'
            };
            supportedIntl = {
                lang: 'en',
                countryCode: 'US'
            };
            out = IntlLang._checkIntlIsSupported(acceptLangIntl, supportedIntl, conf);
            assert.strictEqual(out, true);

            conf = {
                checkBy: 'lang'
            };
            acceptLangIntl = {
                lang: 'en',
                countryCode: 'GB'
            };
            supportedIntl = {
                lang: 'en',
                countryCode: 'US'
            };
            out = IntlLang._checkIntlIsSupported(acceptLangIntl, supportedIntl, conf);
            assert.strictEqual(out, true);

            conf = {
                checkBy: 'lang'
            };
            acceptLangIntl = {
                lang: 'en',
                countryCode: 'US'
            };
            supportedIntl = {
                lang: 'en',
                countryCode: 'US'
            };
            out = IntlLang._checkIntlIsSupported(acceptLangIntl, supportedIntl, conf);
            assert.strictEqual(out, true);

            conf = {
                checkBy: 'lang'
            };
            acceptLangIntl = {
                lang: 'ar',
                countryCode: 'JO'
            };
            supportedIntl = {
                lang: 'en',
                countryCode: 'US'
            };
            out = IntlLang._checkIntlIsSupported(acceptLangIntl, supportedIntl, conf);
            assert.strictEqual(out, false);

            conf = {
                checkBy: 'intl'
            };
            acceptLangIntl = {
                lang: 'en',
                countryCode: 'US'
            };
            supportedIntl = {
                lang: 'en',
                countryCode: 'US'
            };
            out = IntlLang._checkIntlIsSupported(acceptLangIntl, supportedIntl, conf);
            assert.strictEqual(out, true);

            conf = {
                checkBy: 'intl'
            };
            acceptLangIntl = {
                lang: 'ar',
                countryCode: 'JO'
            };
            supportedIntl = {
                lang: 'en',
                countryCode: 'US'
            };
            out = IntlLang._checkIntlIsSupported(acceptLangIntl, supportedIntl, conf);
            assert.strictEqual(out, false);
        });

        it('_BIDI_RTL_LANGS', function () {
            assert.isArray(IntlLang._BIDI_RTL_LANGS);
            assert.lengthOf(IntlLang._BIDI_RTL_LANGS, 17);
            assert.include(IntlLang._BIDI_RTL_LANGS, 'ar');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'arc');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'bcc');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'bqi');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'ckb');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'dv');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'fa');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'glk');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'he');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'ku');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'mzn');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'pnb');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'ps');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'sd');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'ug');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'ur');
            assert.include(IntlLang._BIDI_RTL_LANGS, 'yi');
        });

    });

});
