const fs = require('fs');
const path = require('path');

module.exports = function(dirName, rawExtension, callback) {
	const fileExtension = '.' + rawExtension;

	fs.readdir(dirName, 'utf-8', (err, fileList) => {
		if (err) {
			return callback(err);
		}
		fileList = fileList.filter((fileName) => {
			return path.extname(fileName) === fileExtension;
		});
		callback(null, fileList);
	});
};
