module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
            {
            width: 520,
            suffix: '_large_3x',
            quality: 70
          },{
            width: 420,
            suffix: '_medium_2x',
            quality: 100
          },
          {
            width: 320,
            suffix: '_small_1x',
            quality: 100
          }]
        },
        files: [{
          expand: true,
          src: ['*.jpeg'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};

/* dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1060,
            suffix: '_large_3x',
            quality: 50
          },
          {
            width: 720,
            suffix: '_medium_2x',
            quality: 70
          },
          {
            width: 420,
            suffix: '_small_1x',
            quality: 100
          }]
        },
        files: [{
          expand: true,
          src: ['img_main.jpg'],
          cwd: 'images/',
          dest: 'images/'
        }]
      } */
