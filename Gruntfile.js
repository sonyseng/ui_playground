module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['<%= jshint.files %>'],
    },

    bowercopy: {
	options: {
		srcPrefix: 'app/bower_components'
	},

  	scripts: {
		options: {
			destPrefix: 'resources/public/js/vendor'
		},
		files: {
  			'requirejs/require.js': 'requirejs/require.js'
		}
	}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bowercopy');
  
  grunt.registerTask('default', []);

};
