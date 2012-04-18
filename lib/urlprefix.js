var	imagePrefix = 'images/',
	fontPrefix  = 'fonts/';

var	images = ['.gif', '.jpg', '.png'],
	fonts  = ['.eot', '.otf', '.ttf'];

var path = require('path');


var url = function(urlObj) {
	if (undefined !== urlObj.string) {
		var extension = path.extname(urlObj.string).toLowerCase();

		if (-1 !== fonts.indexOf(extension)) {
			return fontPrefix + urlObj.string;
		} else {
			return imagePrefix + urlObj.string;
		}
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
