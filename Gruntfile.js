module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '*.html',
                    'images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            },
        },
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729,
                base: 'app'
            },
            livereload: {
                options: {
                    open: 'http://127.0.0.1:9000',
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('serve', [
        'connect',
        'watch'
    ]);
};
