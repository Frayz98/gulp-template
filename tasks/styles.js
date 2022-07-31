const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync');
const {src, dest} = require('gulp');

module.exports = function styles() {
    return src(`${process.env.PWD}/src/sass/**/*.+(scss|sass)`)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest(`${process.env.PWD}/dist/css`))
        .pipe(browserSync.stream());
}