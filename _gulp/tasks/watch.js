'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch('./_js/*.js', ['scripts']);
});
