'use strict';

exports = module.exports = function(grunt) {
	var shellOptions = {stdout: true, stderr: true};

	grunt.initConfig({
		shell: {
			mocha: {command: './node_modules/.bin/mocha --reporter list', options: shellOptions}
		},

		jshint: {
			all: {
				src: ['**/*.js'],
				options: {
					ignores: ['.idea/**', 'node_modules/**'],

					'camelcase': true,
					'curly': true,
					'immed': true,
					'latedef': 'nofunc',
					'newcap': true,
					'noarg': true,
					'undef': true,
					'unused': true,
					'strict': true,
					'trailing': true,

					'debug': true,
					'expr': true,
					'globalstrict': true,
					'multistr': true,
					'smarttabs': true,

					'node': true,
					'globals': {
						'describe': true,
						'it': true
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['test']);
	grunt.registerTask('test', ['jshint', 'shell:mocha']);

};
