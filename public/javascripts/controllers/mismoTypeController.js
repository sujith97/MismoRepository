(function() {
	angular.module("mismotype.controller", ["mismotype.service"])
	.controller("mismoTypeController", MismoTypeController);

	MismoTypeController.$inject = ["$state", "$stateParams", "mismoTypeService"];
	function MismoTypeController($state, $stateParams, mismoTypeService) {
		var vm = this;
		mismoTypeService.getType($stateParams.mismoType).then(function(data) {
			var content = {};

			if (data['xsd:sequence'] && Array.isArray(data['xsd:sequence']['xsd:element'])) {
				content.cType = "SEQUENCE";
				content.name = data.name;
				content.elements = data['xsd:sequence']['xsd:element'];
			} else if (data['xsd:sequence'] && !Array.isArray(data['xsd:sequence']['xsd:element'])) {
				content.cType = "SEQUENCE";
				content.name = data.name;
				content.elements = [];
				content.elements.push(data['xsd:sequence']['xsd:element']);
			} else if (data['xsd:simpleContent']) {
				content.cType = "SIMPLE";
				content.name = data.name;
				content.annotation = data['xsd:annotation'];
				content.type = setType(data['xsd:simpleContent']['xsd:extension']['base']);
			} else if (data['xsd:restriction']) {
				content.cType = "SIMPLE";
				content.name = data.name;
				content.enumeration = data['xsd:enumeration'];
				content.type = setType(data['xsd:restriction']['base']);
			}
			vm.mismoType = content;
		});


		function setType(req) {
			if (req == 'xsd:string') {
				return 'String';
			} else if (req == 'xsd:decimal') {
				return 'Decimal';
			} else if (req == 'xsd:integer') {
				content.type = 'Integer';
			} else {
				return req
			}
		}
	}

})();