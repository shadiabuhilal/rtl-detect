'use strict';

var IntlLangLib, self;

IntlLangLib = self = {

    // Private functions - star
    _escapeRegExpPattern: function (str) {
        if (typeof str !== 'string') {
            return str;
        }
        return str.replace(/([\.\*\+\^\$\[\]\\\(\)\|\{\}\,\-\:\?])/g, '\\$1');
    },
    _toLowerCase: function (str, reserveReturnValue) {
        if (typeof str !== 'string') {
            return reserveReturnValue && str;
        }
        return str.toLowerCase();
    },
    _toUpperCase: function (str, reserveReturnValue) {
        if (typeof str !== 'string') {
            return reserveReturnValue && str;
        }
        return str.toUpperCase();
    },
    _trim: function (str, delimiter, reserveReturnValue) {
        var patterns = [],
            regexp,
            addPatterns = function (pattern) {
                // Build trim RegExp pattern and push it to patterns array
                patterns.push('^' + pattern + '+|' + pattern + '+$');
            };

        // fix reserveReturnValue value
        if (typeof delimiter === 'boolean') {
            reserveReturnValue = delimiter;
            delimiter = null;
        }

        if (typeof str !== 'string') {
            return reserveReturnValue && str;
        }

        // Trim based on delimiter array values
        if (Array.isArray(delimiter)) {
            // Loop through delimiter array
            delimiter.map(function(item) {
                // Escape delimiter to be valid RegExp Pattern
                var pattern = self._escapeRegExpPattern(item);
                // Push pattern to patterns array
                addPatterns(pattern);
            });
        }

        // Trim based on delimiter string value
        if (typeof delimiter === 'string') {
            // Escape delimiter to be valid RegExp Pattern
            var patternDelimiter = self._escapeRegExpPattern(delimiter);
            // push pattern to patterns array
            addPatterns(patternDelimiter);
        }

        // If delimiter  is not defined, Trim white spaces
        if (!delimiter) {
            // Push white space pattern to patterns array
            addPatterns('\\s');
        }

        // Build RegExp pattern
        var pattern = '(' + patterns.join('|') + ')';
        // Build RegExp object
        regexp = new RegExp(pattern, 'g');

        // trim string for all patterns
        while(str.match(regexp)) {
            str = str.replace(regexp, '');
        }

        // Return trim string
        return str;
    },

    _parseIntl : function (strIntl) {
        // parse intl regex object
        var regex = /^([a-zA-Z]*)([_\-a-zA-Z]*)$/,
            matches =  regex.exec(strIntl), // exec regex
            parsedIntl,
            lang,
            countryCode;

        if (!strIntl || !matches) {
            return;
        }

        // fix countryCode string by trimming '-' and '_'
        matches[2] = self._trim(matches[2], ['-', '_']);

        lang = self._toLowerCase(matches[1]);
        countryCode = self._toUpperCase(matches[2]) || countryCode;

        // object with lang, countryCode properties
        parsedIntl = {
            lang: lang,
            countryCode: countryCode
        };

        // return parsed intl object
        return parsedIntl;
    },

    _checkIntlIsSupported: function (acceptLangIntl, supportedIntl, conf) {
        var _acceptLangIntl, _supportedIntl;
        if (!acceptLangIntl || !supportedIntl) {
            return;
        }

        conf = conf || {};

        _acceptLangIntl = Object.create(acceptLangIntl);
        _acceptLangIntl.lang = self._toLowerCase(_acceptLangIntl.lang);
        _acceptLangIntl.countryCode = self._toUpperCase(_acceptLangIntl.countryCode);
        _supportedIntl = Object.create(supportedIntl);
        _supportedIntl.lang = self._toLowerCase(_supportedIntl.lang);
        _supportedIntl.countryCode = self._toUpperCase(_supportedIntl.countryCode);

        conf.checkBy = conf.checkBy || 'lang';

        // normalize checkBy value to lower case
        conf.checkBy = self._toLowerCase(conf.checkBy);

        // check if accept-lang intl lang staring is equal to supported intl lang staring
        if (conf.checkBy === 'lang' && _acceptLangIntl.lang && _acceptLangIntl.lang === _supportedIntl.lang) {
            return true;
        }

        // check if accept-lang intl staring is equal to supported intl staring
        if (conf.checkBy === 'intl' && _acceptLangIntl.lang && _acceptLangIntl.lang === _supportedIntl.lang &&
            _acceptLangIntl.countryCode === _supportedIntl.countryCode) {
            return true;
        }

        // return false when no match found
        return false;
    },
    // Private functions - End

    // Public functions - star
    getLang: function (strIntl) {
        var parsedIntl = self._parseIntl(strIntl);
        if (!parsedIntl) {
            return;
        }
        // return lang
        return parsedIntl.lang;
    },

    getCountryCode: function (strIntl) {
        var parsedIntl = self._parseIntl(strIntl);
        if (!parsedIntl) {
            return;
        }
        // return lang
        return parsedIntl.countryCode;
    },

    isRtlLang: function (strIntl) {
        var lang = self.getLang(strIntl);
        if (!lang) {
            return;
        }
        // return true if the intel string lang exists in the BID RTL LANGS array else return false
        return (self._BIDI_RTL_LANGS.indexOf(lang) >= 0);
    },

    getLangDir: function (strIntl) {
        // return 'rtl' if the intel string lang exists in the BID RTL LANGS array else return 'ltr'
        return self.isRtlLang(strIntl) ? 'rtl' : 'ltr';
    },

    getIntl: function (strIntl) {
        var parsedIntl = self._parseIntl(strIntl),
            intlData,
            intlInfo;

        if (!parsedIntl) {
            return;
        }

        intlData = [parsedIntl.lang];

        if (parsedIntl.countryCode) {
            intlData.push(parsedIntl.countryCode);
        }

        // set intl info object
        intlInfo = {
            // intl lang e.g: en
            lang: parsedIntl.lang,

            // intl country code e.g: US
            countryCode: parsedIntl.countryCode,

            // intl with hyphen format e.g: en-US

            hyphenFormat: self._trim(intlData.join('-'), '-'),

            // intl with underscore format e.g: en_US
            underscoreFormat: self._trim(intlData.join('_'), '_'),

            // intl lang direction e.g: ltr or rtl
            langDir: self.getLangDir(strIntl),

            // is intl right to left lang e.g: true or false
            isRtlLang: self.isRtlLang(strIntl)
        };

        // return intl info object
        return intlInfo;
    },

    getAcceptLangIntls: function (req) {
        // initialize empty array of intls
        var intls = [],
            // get accept-language form req
            reqAcceptLang = req && req.headers && req.headers['accept-language'];

        // check if accept-language is empty
        if (!reqAcceptLang) {
            return;
        }

        // split accept-language string based on ',' delimiter
        var arrAcceptLangs = reqAcceptLang.split(',');

        // loop through accept-language array
        for (var i = 0; i < arrAcceptLangs.length; i++) {

            // split accept-language item string based on ';' delimiter
            var acceptLangItem = arrAcceptLangs[i].split(';');

            // trim and set intl string
            var strIntl = self._trim(acceptLangItem[0]);

            // trim and set unclean intl score string
            var q = self._trim(acceptLangItem[1]);

            // set intl info object based on intl string
            var intl = self.getIntl(strIntl);

            // set clean intl score value
            intl.score = q ? q.slice(2) || 0 : 1;

            // convert string value to float
            intl.score = parseFloat(intl.score);

            // push intl info object to intls array
            intls.push(intl);

        }

        // sort array of intl objects based on score
        intls = intls.sort(function(a, b) {
            return b.score - a.score;
        });

        return intls;
    },

    getAcceptLangIntl: function (req, conf) {
        // get accept-lang intls array
        var acceptLangIntls = self.getAcceptLangIntls(req);

        if (!acceptLangIntls) {
            return;
        }

        // check conf is supported langs array
        if (Array.isArray(conf)) {
            // restructure and fix conf object
            conf = {supported: conf};
        }

        // check if supported langs array is not set
        if (!(conf && conf.supported)) {
            return;
        }


        // fix supported array if supported value is string
        conf.supported = Array.isArray(conf.supported) ? conf.supported : conf.supported.split(',');

        for (var i = 0; i < conf.supported.length; i++) {
            for (var j =0; j <  acceptLangIntls.length; j++) {
                var supportedIntl = self.getIntl(conf.supported[i]);
                var acceptLangIntl = acceptLangIntls[j];
                // check if accept-lang intl based on conf options
                if (self._checkIntlIsSupported(acceptLangIntl, supportedIntl, conf)) {
                    // return accept-lang Intl info object
                    return acceptLangIntl;
                }
            }
        }

        return;
    }
    // Public functions - End
};

// Const BIDI_RTL_LANGS Array
// BIDI_RTL_LANGS ref: http://en.wikipedia.org/wiki/Right-to-left
Object.defineProperty(self, '_BIDI_RTL_LANGS', {
    value: [
        'ar', /* 'العربية', Arabic */
        'arc', /* Aramaic */
        'bcc', /* 'بلوچی مکرانی', Southern Balochi */
        'bqi', /* 'بختياري', Bakthiari */
        'ckb', /* 'Soranî / کوردی', Sorani */
        'dv', /* Dhivehi */
        'fa', /* 'فارسی', Persian */
        'glk', /* 'گیلکی', Gilaki */
        'he', /* 'עברית', Hebrew */
        'ku', /* 'Kurdî / كوردی', Kurdish */
        'mzn', /* 'مازِرونی', Mazanderani */
        'pnb', /* 'پنجابی', Western Punjabi */
        'ps', /* 'پښتو', Pashto, */
        'sd', /* 'سنڌي', Sindhi */
        'ug', /* 'Uyghurche / ئۇيغۇرچە', Uyghur */
        'ur', /* 'اردو', Urdu */
        'yi', /* 'ייִדיש', Yiddish */
    ],
    writable: false,
    enumerable: true,
    configurable: false
});


module.exports = IntlLangLib;
