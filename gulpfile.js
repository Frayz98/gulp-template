const {parallel} = require('gulp');

const views = require('./tasks/views');
const server = require('./tasks/server');
const watcher = require('./tasks/watcher');
const styles = require('./tasks/styles');
const scripts = require('./tasks/scripts');
const fonts = require('./tasks/fonts');
const images = require('./tasks/images');

exports.default = parallel(watcher, server, views, styles, scripts, fonts, images);