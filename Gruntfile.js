module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: ['lib/*.js', 'test/*.js', 'Gruntfile.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        mochaTest: {
            all: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/*-test.js']
            }
        }
    });

    // Load the plugin(s)
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');

    // Tasks
    grunt.registerTask('default', ['jshint', 'mochaTest']);
};
