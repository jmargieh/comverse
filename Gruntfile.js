module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
    	server: {
      		options: {
        	port: 8080,
        	protocol: 'http',
        	base: '.',
        	hostname: 'localhost',
        	keepalive: false
      		}
    	}
  	},
  	md2html: {
      one_file: {
        options: {},
        files: [{
          src: ['README.md'],
          dest: 'README.html'
        }]
      }
    },
    watch: {
  		scripts: {
    	files: ['**/*.md'],
    	tasks: ['md2html'],
    	options: {
      	spawn: false
    	}
  	}
}
  });



  	grunt.loadNpmTasks('grunt-md2html'); // load ms2html grunt task

  	grunt.loadNpmTasks('grunt-contrib-watch'); // load watch task

	grunt.loadNpmTasks('grunt-contrib-connect'); // start server


	grunt.registerTask('default', 'Default Grunt Task Runner', function() {
  	grunt.task.run(['connect', 'md2html','watch']);
	});


};