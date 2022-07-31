const {watch, parallel} = require('gulp');

const views = require('./views');
const styles = require('./styles');

module.exports = function watcher() {
    watch(`${process.env.PWD}/src/sass/**/*.+(scss|sass|css)`, parallel(styles));
    watch(`${process.env.PWD}/src/*.html`).on('change', parallel(views));
}