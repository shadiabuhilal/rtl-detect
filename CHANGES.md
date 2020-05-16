# rtl-detect CHANGES

## ?

- Linting (JavaScript): Ignore `coverage`; check nested files
- Linting (JavaScript): Avoid `globals` in favor of "mocha" env
    in `.eslintrc.json`; lint nested test files; add `.eslintignore`
- Linting (package.json): Add recommended `contributors` and
    `engines` fields; use non-deprecated `license` format
- Docs: Add `CHANGES.md` file
- Maintenance: Add `.editorconfig`
- Maintenance: Remove Grunt in favor of `package.json` eslint and
    nyc/mocha scripts
- Testing: Use chai/register-assert
- Travis: Add 10, 12, 14; drop 7
- npm: Add `package-lock.json`
- npm: Update devDeps
