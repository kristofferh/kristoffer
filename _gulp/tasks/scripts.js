'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {

    var browserified = transform(function(filename) {
        var b = browserify(filename);
        return b.bundle();
    });

    return gulp.src(['./_js/app.js'])
        .pipe(browserified)
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js/'));
});
