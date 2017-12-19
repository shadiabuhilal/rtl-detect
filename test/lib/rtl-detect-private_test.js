/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

var RtlDetect = require('../../' + 'lib/rtl-detect');

var assert = require('chai').assert;

describe('rtl-detect', function() {

    describe('private', function() {

        it('_escapeRegExpPattern()', function () {
            var strIn, out;

            out = RtlDetect._escapeRegExpPattern(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = RtlDetect._escapeRegExpPattern(strIn);
            assert.isNull(out);

            strIn = '';
            out = RtlDetect._escapeRegExpPattern(strIn);
            assert.strictEqual(out, '');

            strIn = ' ';
            out = RtlDetect._escapeRegExpPattern(strIn);
            assert.strictEqual(out, ' ');

            strIn = '[CODE]';
            out = RtlDetect._escapeRegExpPattern(strIn);
            assert.strictEqual(out, '\\[CODE\\]');

            strIn = '.*+^$[]()|{},-:?\\';
            out = RtlDetect._escapeRegExpPattern(strIn);
            assert.strictEqual(out, '\\.\\*\\+\\^\\$\\[\\]\\(\\)\\|\\{\\}\\,\\-\\:\\?\\\\');

        });

        it('_toLowerCase()', function () {
            var strIn, out;

            out = RtlDetect._toLowerCase(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = RtlDetect._toLowerCase(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = RtlDetect._toLowerCase(strIn, true);
            assert.isNull(out);

            strIn = '';
            out = RtlDetect._toLowerCase(strIn);
            assert.strictEqual(out, '');

            strIn = ' ';
            out = RtlDetect._toLowerCase(strIn);
            assert.strictEqual(out, ' ');

            strIn = 'Test Code';
            out = RtlDetect._toLowerCase(strIn);
            assert.strictEqual(out, 'test code');

            strIn = 'TEST CODE';
            out = RtlDetect._toLowerCase(strIn);
            assert.strictEqual(out, 'test code');

            strIn = 'test code';
            out = RtlDetect._toLowerCase(strIn);
            assert.strictEqual(out, 'test code');
        });

        it('_toUpperCase()', function () {
            var strIn, out;

            out = RtlDetect._toUpperCase(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = RtlDetect._toUpperCase(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = RtlDetect._toUpperCase(strIn, true);
            assert.isNull(out);


            strIn = '';
            out = RtlDetect._toUpperCase(strIn);
            assert.strictEqual(out, '');

            strIn = ' ';
            out = RtlDetect._toUpperCase(strIn);
            assert.strictEqual(out, ' ');

            strIn = 'Test Code';
            out = RtlDetect._toUpperCase(strIn);
            assert.strictEqual(out, 'TEST CODE');

            strIn = 'TEST CODE';
            out = RtlDetect._toUpperCase(strIn);
            assert.strictEqual(out, 'TEST CODE');

            strIn = 'test code';
            out = RtlDetect._toUpperCase(strIn);
            assert.strictEqual(out, 'TEST CODE');

        });

        it('_trim()', function () {
            var strIn, out;

            out = RtlDetect._trim(strIn);
            assert.isUndefined(out);

            out = RtlDetect._trim(strIn, '-');
            assert.isUndefined(out);

            strIn = null;
            out = RtlDetect._trim(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = RtlDetect._trim(strIn, true);
            assert.isNull(out);

            strIn = null;
            out = RtlDetect._trim(strIn, '-', true);
            assert.isNull(out);

            strIn = null;
            out = RtlDetect._trim(strIn, '-');
            assert.isUndefined(out);


            strIn = '';
            out = RtlDetect._trim(strIn);
            assert.strictEqual(out, '');

            out = RtlDetect._trim(strIn, '-');
            assert.strictEqual(out, '');


            strIn = ' ';
            out = RtlDetect._trim(strIn);
            assert.strictEqual(out, '');

            strIn = '-';
            out = RtlDetect._trim(strIn, '-');
            assert.strictEqual(out, '');


            strIn = '  TRIM CODE  ';
            out = RtlDetect._trim(strIn);
            assert.strictEqual(out, 'TRIM CODE');

            strIn = '-TRIM-CODE-';
            out = RtlDetect._trim(strIn, '-');
            assert.strictEqual(out, 'TRIM-CODE');

            strIn = '-_TRIM-_CODE_-';
            out = RtlDetect._trim(strIn, ['-', '_']);
            assert.strictEqual(out, 'TRIM-_CODE');

        });

        it('_parseLocale()', function () {
            var strIn, out;

            out = RtlDetect._parseLocale(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = RtlDetect._parseLocale(strIn);
            assert.isUndefined(out);

            strIn = '';
            out = RtlDetect._parseLocale(strIn);
            assert.isUndefined(out);

            strIn = ' ';
            out = RtlDetect._parseLocale(strIn);
            assert.isUndefined(out);

            strIn = '1234';
            out = RtlDetect._parseLocale(strIn);
            assert.isUndefined(out);

            strIn = 'en';
            out = RtlDetect._parseLocale(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.isUndefined(out.countryCode);

            strIn = 'en-US';
            out = RtlDetect._parseLocale(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'US');

            strIn = 'en_US';
            out = RtlDetect._parseLocale(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'US');


            strIn = 'en-us';
            out = RtlDetect._parseLocale(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'US');

            strIn = 'EN-US';
            out = RtlDetect._parseLocale(strIn);
            assert.isObject(out);
            assert.strictEqual(out.lang, 'en');
            assert.strictEqual(out.countryCode, 'US');

            strIn = '1234';
            out = RtlDetect._parseLocale(strIn);
            assert.isUndefined(out);

            strIn = '1a2B3c4';
            out = RtlDetect._parseLocale(strIn);
            assert.isUndefined(out);

        });

        it('_BIDI_RTL_LANGS', function () {
            assert.isArray(RtlDetect._BIDI_RTL_LANGS);
            assert.lengthOf(RtlDetect._BIDI_RTL_LANGS, 19);
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'ae');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'ar');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'arc');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'bcc');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'bqi');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'ckb');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'dv');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'fa');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'glk');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'he');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'ku');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'mzn');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'nqo');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'pnb');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'ps');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'sd');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'ug');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'ur');
            assert.include(RtlDetect._BIDI_RTL_LANGS, 'yi');
        });

    });

});
