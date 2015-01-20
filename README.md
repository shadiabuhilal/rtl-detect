# intl-lang
This library will help you to detect if the intl is right-to-left language or not.

## Usage

### require intl-lang lib
```js
var IntlLang = require('intl-lang');
```

### isRtlLang
This function will check if the intl is right-to-left language or not.

Examples:

```js
var isRtl = IntlLang.isRtlLang('ar-JO');
// isRtl will be true
```

```js
var isRtl = IntlLang.isRtlLang('ar_JO');
// isRtl will be true
```

```js
var isRtl = IntlLang.isRtlLang('ar');
// isRtl will be true
```

```js
var isRtl = IntlLang.isRtlLang('en-US');
// isRtl will be false
```

### getLangDir
This function will get language direction for the intl.

Examples:

```js
var langDir = IntlLang.getLangDir('ar-JO');
// langDir will be 'rtl'
```

```js
var langDir = IntlLang.getLangDir('ar_JO');
// langDir will be 'rtl'
```

```js
var langDir = IntlLang.getLangDir('ar');
// langDir will be 'rtl'
```

```js
var langDir = IntlLang.getLangDir('en-US');
// langDir will be 'ltr'
```

### getLang
This function will get language for the intl.

Examples:

```js
var lang = IntlLang.getLang('en-US');
// lang will be 'en'
```

```js
var lang = IntlLang.getLang('en');
// lang will be 'en'
```

### getCountryCode
This function will get country code for the intl.

Examples:

```js
var countryCode = IntlLang.getCountryCode('en-US');
// countryCode will be 'US'
```

```js
var countryCode = IntlLang.getCountryCode('en_US');
// countryCode will be 'US'
```

```js
var countryCode = IntlLang.getCountryCode('en');
// countryCode will be Undefined
```

### getIntl
This function will get the intl object.

Examples:

```js
var intlInfo = IntlLang.getIntl('en-US');
// intlInfo will be {lang: 'en', countryCode: 'US', hyphenFormat: 'en-US', underscoreFormat: 'en_US', langDir: 'ltr', isRtlLang: false}
```

```js
var intlInfo = IntlLang.getIntl('ar-JO');
// intlInfo will be {lang: 'ar', countryCode: 'JO', hyphenFormat: 'ar-JO', underscoreFormat: 'ar_JO', langDir: 'rtl', isRtlLang: true}
```

```js
var intlInfo = IntlLang.getIntl('ar');
// intlInfo will be {lang: 'ar', countryCode: Undefined, hyphenFormat: 'ar', underscoreFormat: 'ar', langDir: 'rtl', isRtlLang: true}
```

### getAcceptLangIntls
This function will get array of intls base on ```req.headers['accept-language']``` value.

Examples:
```js
var acceptLangIntls = IntlLang.getAcceptLangIntls(req);
// acceptLangIntls will be array of intl objects and each intl object contains these properties: lang, countryCode, hyphenFormat, underscoreFormat, langDir, isRtlLang, score
```

### getAcceptLangIntl
This function will get accepted intl object base on ```req.headers['accept-language']``` value.

Examples:
```js
// assume req.headers['accept-language'] equal to 'en,es;q=0.8,en-GB;q=0.6';
var conf = {
        checkBy: 'lang',
        supported: ['en','en-GB']
    };
var intlInfo = IntlLang.getAcceptLangIntl(req, conf);
// intlInfo will be {lang: 'en', countryCode: undefined, hyphenFormat: 'en', underscoreFormat: 'en', langDir: 'ltr', isRtlLang: false, score: 1}
```

```js
// assume req.headers['accept-language'] equal to 'en,es;q=0.8,en-GB;q=0.6';
var conf = {
        checkBy: 'intl',
        supported: ['ar','en-GB']
    };
var intlInfo = IntlLang.getAcceptLangIntl(req, conf);
// intlInfo will be {lang: 'en', countryCode: 'GB', hyphenFormat: 'en-GB', underscoreFormat: 'en_GB', langDir: 'ltr', isRtlLang: false, score: 0.6}
```