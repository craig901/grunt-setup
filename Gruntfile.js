module.exports = function(grunt) {

	'use strict';

	// Force use of Unix newlines
	grunt.util.linefeed = '\n';

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Project configuration
	grunt.initConfig({
		concat: {
			target1: {
				src: [
					'src/js/modernizr.js',
					'src/js/init.js'
				],
				dest: 'assets/js/application.js'
			}
		},
		uglify: {
			target1: {
				src: '<%= concat.target1.dest %>',
				dest: 'assets/js/application.min.js'
			}
		},
		less: {
			development: {
				options: {
					paths: ["src/less/assets/css"]
				},
				files: {
					"assets/css/application.css": "src/css/less/__application.less"
				}
			},
		}
	});

	// Custom Tasks
	grunt.registerTask('foo', function() {
		grunt.log.writeln('foo is running...');
	});

	// Define the default task
	grunt.registerTask('default', ['concat', 'uglify', 'less']);

}