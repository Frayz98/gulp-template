const {src, dest} = require('gulp');
const htmlmin = require('gulp-htmlmin');

module.exports = function views() {
    return src(`${process.env.PWD}/src/*.html`)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(dest(`${process.env.PWD}/dist/`))
}