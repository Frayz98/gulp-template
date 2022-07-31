const {src, dest} = require('gulp');

module.exports = function scripts() {
    return src(`${process.env.PWD}/src/fonts/**/*`)
        .pipe(dest(`${process.env.PWD}/dist/fonts`))
}