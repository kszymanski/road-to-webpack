const gulp = require('gulp');
const webpack = require('webpack-stream');
const config = require('./webpack.config');

gulp.task('default', function () {
    return gulp.src('src/index.js')
        .pipe(webpack(config({}, {
            mode: 'production'
        })))
        .pipe(gulp.dest('gulpDist'));
});