'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var jsonToSass = require('json-to-sass');

module.exports = function (options) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-json-to-sass', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer(jsonToSass(file.contents.toString()));
			file.path = gutil.replaceExtension(file.path, '.scss');
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-json-to-sass', err));
		}

		cb();
	});
};
