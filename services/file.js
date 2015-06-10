var fs = require('fs'),
	path = require('path'),
	$q = require('Q');

var fileService = function() {
	var service = {
		readFile: readFile,
		writeFile: writeFile
	}
	return service;

	function readFile(fileRelativePath) {
		var deferred = $q.defer();
		var filePath = path.join(__dirname, fileRelativePath);
		console.log('Path: ' + filePath);
		fs.readFile(filePath, { encoding: 'utf-8' }, function(error, fileContent) {
    	if (error) {
    		console.error(fileContent);
    		deferred.reject(new Error(error));
    	} else {
    		deferred.resolve(fileContent);
    	}
		});
		return deferred.promise;
	}

	function writeFile(fileRelativePath, contentToWrite) {

	}

}

module.exports = fileService();