/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

var path = require('path');
var childProcess = require('child_process');
var spawn = childProcess.spawn;

module.exports = function (grunt) {

    var base = path.join(__dirname, '../node_modules');

    grunt.registerTask('tests', 'Run unit tests and show code coverage', function () {
        var done = this.async();
        var end = function (err) {
            if (err) {
                grunt.fatal(err + ' failing tests..');
            }
            done(err);
        };
        var cmd = path.join(base, '.bin/istanbul');
        var coverageDir = path.join(process.cwd(), 'coverage');
        var args = [
            'cover',
            '--print',
            'both',
            '--dir',
            coverageDir,
            '--'
        ];
        var mochaPath;

        //Resolve mocha by requiring it and falling back to local.
        try {
            mochaPath = path.join(require.resolve('mocha'), '../bin/_mocha');
        }
        catch (e) {
            mochaPath = path.join(base, 'mocha/bin/_mocha');
        }

        args.push(mochaPath);
        args.push('--reporter');
        args.push('spec');

        var testFiles = ['./test/*.js', './test/**/*.js'];
        var files = grunt.file.expand(testFiles);
        files.forEach(function (p) {
            args.push(p);
        });

        var child = spawn(cmd, args, {
            cwd: process.cwd(),
            env: process.env,
            stdio: 'inherit'
        });
        child.on('exit', end);
    });

    grunt.registerTask('test', 'Run jshint and unit tests and show code coverage', ['clean', 'eslint', 'tests']);
};
