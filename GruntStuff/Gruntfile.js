module.exports = function (grunt) {
	grunt.initConfig({
		jshint: ['Gruntfile.js'],
		less:{
			compile : {
				files: {
					'C:/Users/Andy/AppData/Roaming/npm/node_modules/grunt-cli/GruntFuckery/compiled.css': 'C:/Users/Andy/AppData/Roaming/npm/node_modules/grunt-cli/GruntFuckery/layout.less'
				}
			}
		}
		});
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpMTasks('grunt-contrib-less');
		grunt.registerTask('default', ['jshint']);
		};