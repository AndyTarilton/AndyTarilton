module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			client: [
				'public/js/**/*.js',
				'!public/js/vendor'
			]
		},
		less:{
			compile : {
				files: {
					'build/css/compiled.css': [
					'public/**/*.less',
					'public/*.less',
					'!public/vendor/**/*.less',
					]
				}
			}
		},
		concat: {
			js: {
				files: {
					'build/js/bundle.js': 'public/js/**/*.js'
				}
			}
		},
		uglify: {
			bundle: {
				files: {
					'build/js/bundle.mins.js': 'build/js/bundle.js'
				}
			}
		},
		sprite: {
			icons: {
				src: 'public/img/icons/*.png',
				dest: 'build/img/icons.png',
				destCss: 'build/css/icons.css'
			}
		},
		clean: {
			js: 'build/js',
			css: 'build/css',
			less: 'public/**/*.css'
		},
		timestamp: {
			options: {
				file: 'Desktop/CSCI 240/AndyTarilton/GruntStuff'
			}
		},
		watch: {
			rebuild: {
				tasks: ['default'],
				files: ['public/**/*']
			}
			
		},
		watch:{
			livereload: {
				options: {
					livereload:true
				},
				files: [
				'public/**/*.{css, js}',
				'views/**/*.html'
				]
			}
		},
		nodemon: {
			dev: {
				script: 'app.js'
			}
		},
		concurrent: {
			dev: {
				tasks: ['nodemon', 'watch']
			}
		}
		});
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-contrib-less');
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-spritesmith');
		grunt.loadNpmTasks('grunt-contrib-clean');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-concurrent');
		grunt.loadNpmTasks('grunt-nodemon');
		grunt.registerTask('default', ['jshint', 'less', 'concat', 'uglify', 'sprite', 'clean', 'watch', 'nodemon', 'concurrent']);
		grunt.registerTask('timestamp', function() {
			var options = this.options( {
				file: '.timestamp'
			});
			var timestamp = +new Date();
			var contents = timestamp.toString();
			
			grunt.file.write(options.file, contents);
		})
	};