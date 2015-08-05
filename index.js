'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var fileStream = require('fs');
var jsonToSass = require('json-to-sass');
var _ = require('lodash');

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
			fileStream.readFile(options.jsonPath, 'utf8', _.partial(convertFile, cb, options.scssPath));
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-json-to-sass', err));
			cb();
		}
	});
};

function convertFile (cb, outputLocation, error, data) {
	var scss = jsonToSass(data);

	fileStream.writeFile(outputLocation, scss, 'utf8', function (error) {
		cb();
	});
}
