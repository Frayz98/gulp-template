const {src, dest} = require('gulp');

module.exports = function scripts() {
    return src(`${process.env.PWD}/src/js/**/*.js`)
        .pipe(dest(`${process.env.PWD}/dist/js`))
}