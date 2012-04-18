/**
 * Module dependencies.
 */
var	stylus = require('stylus'),
  	path   = require('path'),
  	nodes  = stylus.nodes;


var	imagePrefix = 'images/',
	fontPrefix  = 'fonts/';

var	images = ['.gif', '.jpg', '.png'],
	fonts  = ['.eot', '.otf', '.ttf'];


var url = function(urlObj) {
	if (undefined !== urlObj.string) {
		var extension = path.extname(urlObj.string).toLowerCase();
		var ret;

		if (-1 !== fonts.indexOf(extension)) {
			ret = fontPrefix + urlObj.string;
		} else {
			ret = imagePrefix + urlObj.string;
		}

		return new nodes.Literal("url('" + ret + "')");
	}
};


var prefix = function(optObj) {
	imagePrefix = (undefined !== optObj && undefined !== optObj.imagePrefix)
		? optObj.imagePrefix
		: imagePrefix;
	fontPrefix = (undefined !== optObj && undefined !== optObj.fontPrefix)
		? optObj.fontPrefix
		: fontPrefix;

	return function(style) {
		style.define('url', url);
	};
};


module.exports = prefix;
