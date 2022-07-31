const browserSync = require('browser-sync');
const {watch} = require('gulp');

module.exports = function server() {
    browserSync({
        server: {
            baseDir: `${process.env.PWD}/dist`
        }
    });
    watch(`${process.env.PWD}/src/*.html`).on('change', browserSync.reload);
};
