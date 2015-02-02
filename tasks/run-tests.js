//Copyright 2015, Yahoo! Inc.
'use strict';

var path = require('path'),
    childProcess = require('child_process'),
    spawn = childProcess.spawn;

module.exports = function(grunt) {

    var base = path.join(__dirname, '../node_modules');

    grunt.registerTask('tests', 'Run unit tests and show code coverage', function() {
        var done = this.async(),
            end = function(err) {
                if (err) {
                    grunt.fatal(err + ' failing tests..');
                }
                done(err);
            },
            cmd = path.join(base, '.bin/istanbul'),
            coverageDir = path.join(process.cwd(), 'coverage'),
            args = [
                'cover',
                '--print',
                'both',
                '--dir',
                coverageDir,
                '--'
            ],
            mochaPath;

        //Resolve mocha by requiring it and falling back to local.
        try {
            mochaPath = path.join(require.resolve('mocha'), '../bin/_mocha');
        } catch (e) {
            mochaPath = path.join(base, 'mocha/bin/_mocha');
        }

        args.push(mochaPath);
        args.push('--reporter');
        args.push('spec');

        var testFiles = ['./test/*.js', './test/**/*.js'];
        var files = grunt.file.expand(testFiles);
        files.forEach(function(p) {
            args.push(p);
        });

        var child = spawn(cmd, args, {
            cwd: process.cwd(),
            env: process.env,
            stdio: 'inherit'
        });
        child.on('exit', end);
    });

    grunt.registerTask('test', 'Run jshint and unit tests and show code coverage', ['clean', 'jshint', 'tests']);
};

