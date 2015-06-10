var fileService = require('./file'),
	parser = require('xml2json'),
	fs = require('fs'),
	path = require('path');

fileService.readFile("../resources/mismo.xsd").then(function(mismoData) {
	var options = {
    object: false,
    reversible: true,
    coerce: true,
    sanitize: true,
    trim: true,
    arrayNotation: false
	};
	var json = parser.toJson(mismoData, options);
	fs.writeFile(path.join(__dirname, "../resources/mismo.json"), json, function(err) {
    if(err) return console.log(err);
    console.log("The file was saved!");
	});
});
