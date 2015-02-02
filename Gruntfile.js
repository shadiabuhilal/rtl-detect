//Copyright 2015, Yahoo! Inc.
'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        jshint: {
            src: [
                'Gruntfile.js',
                'tasks/*.js',
                'lib/*.js',
                'index.js',
                'test/*.js'
            ],
            options: {
                reporter: require('jshint-stylish'),
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['coverage']
        }

    });

    grunt.loadTasks('./tasks');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');

};
