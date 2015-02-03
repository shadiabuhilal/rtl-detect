/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

var RtlDetect = require('../../' + 'lib/rtl-detect');

var assert = require('chai').assert;

describe('rtl-detect', function() {

    describe('public', function() {

        it('isRtlLang()', function () {
            var strIn, out;

            out = RtlDetect.isRtlLang(strIn);
            assert.isUndefined(out);

            strIn = null;
            out = RtlDetect.isRtlLang(strIn);
            assert.isUndefined(out);

            strIn = '';
            out = RtlDetect.isRtlLang(strIn);
            assert.isUndefined(out);

            strIn = ' ';
            out = RtlDetect.isRtlLang(strIn);
            assert.isUndefined(out);

            strIn = '1234';
            out = RtlDetect.isRtlLang(strIn);
            assert.isUndefined(out)

            strIn = 'en';
            out = RtlDetect.isRtlLang(strIn);
            assert.strictEqual(out, false);

            strIn = 'EN';
            out = RtlDetect.isRtlLang(strIn);
            assert.strictEqual(out, false);

            strIn = 'en-US';
            out = RtlDetect.isRtlLang(strIn);
            assert.strictEqual(out, false);

            strIn = 'en_US';
            out = RtlDetect.isRtlLang(strIn);
            assert.strictEqual(out, false);

            strIn = 'en-us';
            out = RtlDetect.isRtlLang(strIn);
            assert.strictEqual(out, false);

            strIn = 'ar';
            out = RtlDetect.isRtlLang(strIn);
            assert.strictEqual(out, true);

            strIn = 'AR';
            out = RtlDetect.isRtlLang(strIn);
            assert.strictEqual(out, true);

            strIn = 'ar-jo';
            out = RtlDetect.isRtlLang(strIn);
            assert.strictEqual(out, true);

            strIn = 'ar-JO';
            out = RtlDetect.isRtlLang(strIn);
            assert.strictEqual(out, true);

            strIn = 'ar_JO';
            out = RtlDetect.isRtlLang(strIn);
            assert.strictEqual(out, true);

        });

        it('getLangDir()', function () {
            var strIn, out;

            out = RtlDetect.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = null;
            out = RtlDetect.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = '';
            out = RtlDetect.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = ' ';
            out = RtlDetect.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = '1234';
            out = RtlDetect.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = 'en';
            out = RtlDetect.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = 'EN';
            out = RtlDetect.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = 'en-US';
            out = RtlDetect.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = 'en_US';
            out = RtlDetect.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = 'en-us';
            out = RtlDetect.getLangDir(strIn);
            assert.strictEqual(out, 'ltr');

            strIn = 'ar';
            out = RtlDetect.getLangDir(strIn);
            assert.strictEqual(out, 'rtl');

            strIn = 'AR';
            out = RtlDetect.getLangDir(strIn);
            assert.strictEqual(out, 'rtl');

            strIn = 'ar-jo';
            out = RtlDetect.getLangDir(strIn);
            assert.strictEqual(out, 'rtl');

            strIn = 'ar-JO';
            out = RtlDetect.getLangDir(strIn);
            assert.strictEqual(out, 'rtl');

            strIn = 'ar_JO';
            out = RtlDetect.getLangDir(strIn);
            assert.strictEqual(out, 'rtl');
        });

    });

});
