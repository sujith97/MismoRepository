(function() {
	angular.module("mismotype.service", [])
	.factory("mismoTypeService", MismoTypeService);

	MismoTypeService.$inject = ["$http", "$rootScope"];
	function MismoTypeService($http, $rootScope) {
		var service = {
			getType: getType
		};
		return service;

		function getType(mismoType) {
			return $http.get($rootScope.constants.serverAddress + "/types/" + mismoType).then(function(data) {
				return data.data;
			});
		}

	}
})();