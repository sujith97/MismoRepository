var fileService = require('./file'),
	parser = require('xml2json'),
	fs = require('fs'),
	path = require('path'),
	$q = require('Q')

function mismoService() {
	var mismoData = null,
		ELEMENT_KEY = {
			SCHEMA: "xsd:schema",
			COMPLEX_TYPE: "xsd:complexType",
			SIMPLE_TYPE: "xsd:simpleType",
			NAME: "name"
		};

	var service = {
		getAllTypes: getAllTypes,
		getType: getType
	}
	return service;

	function getAllTypes() {
		return retrieveMismoData().then(function(data) {
			var types = [],
				i = 0,
				complexTypes = data[ELEMENT_KEY.SCHEMA][ELEMENT_KEY.COMPLEX_TYPE],
				simpleTypes = data[ELEMENT_KEY.SCHEMA][ELEMENT_KEY.SIMPLE_TYPE];
			for (; i < complexTypes.length; i++) {
				types.push(complexTypes[i][ELEMENT_KEY.NAME]);
			}
			for (i = 0; i < simpleTypes.length; i++) {
				types.push(simpleTypes[i][ELEMENT_KEY.NAME]);
			}
			return types;
		});
	}

	function getType(typeName) {
		return retrieveMismoData().then(function(data) {
			console.log('Type: ' + typeName);
			var i = 0,
				complexTypes = data[ELEMENT_KEY.SCHEMA][ELEMENT_KEY.COMPLEX_TYPE],
				simpleTypes = data[ELEMENT_KEY.SCHEMA][ELEMENT_KEY.SIMPLE_TYPE];
			for (; i < complexTypes.length; i++) {
				if (typeName === complexTypes[i][ELEMENT_KEY.NAME]) return complexTypes[i];
			}
			for (i = 0; i < simpleTypes.length; i++) {
				if (typeName === simpleTypes[i][ELEMENT_KEY.NAME]) return simpleTypes[i];
			}
			return {};
		});
	}

	/*
	* Retirve MISMO XSD JSON.
	*/
	function retrieveMismoData() {
		var deferred = $q.defer();
		if (!mismoData) {
			retrieveDataFromFile(deferred);
		} else {
			setTimeout(function() {deferred.resolve(mismoData)}, 1)
		}
		return deferred.promise;
	}

	function retrieveDataFromFile(deferred) {
		console.log('Reading from file...');
		fs.readFile(path.join(__dirname, "../resources/mismo.xsd"), { encoding: 'utf-8' }, function(error, data) {
			if (error) {
				console.error(fileContent);
    		deferred.reject(new Error(error));
			} else {
				var options = {
			    object: true,
			    reversible: true,
			    coerce: true,
			    sanitize: true,
			    trim: true,
			    arrayNotation: false
				};
				mismoData = parser.toJson(data, options);
				deferred.resolve(mismoData);
			}
		});
	}

}

module.exports = mismoService();