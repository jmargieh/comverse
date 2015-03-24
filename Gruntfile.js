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
        keepalive: true
      }
    }
  }
  });




	grunt.loadNpmTasks('grunt-contrib-connect');

};