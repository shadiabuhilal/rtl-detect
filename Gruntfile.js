/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        eslint: {
            options: {
                configFile: '.eslintrc.json',
                fix: true
            },
            target: [
                'Gruntfile.js',
                'tasks/*.js',
                'lib/*.js',
                'index.js',
                'test/*.js'
            ]
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['coverage']
        }

    });

    grunt.loadTasks('./tasks');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-eslint');

};
