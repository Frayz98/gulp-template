const {src, dest} = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = function scripts() {
    return src(`${process.env.PWD}/src/img/**/*`)
        .pipe(imagemin())
        .pipe(dest(`${process.env.PWD}/dist/img`))
}