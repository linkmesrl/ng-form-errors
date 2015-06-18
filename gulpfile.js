'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    karma = require('karma').server,
    protractor = require("gulp-protractor").protractor;
var templateCache = require('gulp-angular-templatecache');

gulp.task('unit', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('template', function () {
    gulp.src('src/error/*.html')
        .pipe(templateCache('errorMessageTemplate.js',{module: 'validationErrors'}))
        .pipe(gulp.dest('src/error'));
});

gulp.task('default', ['connect']);
