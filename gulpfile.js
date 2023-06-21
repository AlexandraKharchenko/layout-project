'use strict';
const sass = require('gulp-sass');
const pug = require('gulp-pug');
let gulp = require('gulp');

function compileSAAS() {
    return gulp.src(`./dist/scss/**/*.scss`)
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
}

function compilePUG() {
    return gulp.src('.dist/pug/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/pug'))
}

exports.buildStyles = compileSAAS;
exports.buildStyles = compilePUG;
exports.default = async function () {
    gulp.watch(`./dist/scss/**/*.scss`, gulp.parallel(compilePUG, compileSAAS));
};