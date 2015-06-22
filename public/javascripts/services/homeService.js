(function() {
	angular.module("home.service", [])
	.factory("homeService", HomeService);

	HomeService.$inject = ["$http", "$rootScope"];
	function HomeService($http, $rootScope) {
		var service = {
			getAllTypes: getAllTypes
		};
		return service;

		function getAllTypes() {
			return $http.get("/types/").then(function(data) {
				return data.data;
			});
		}
	}
})();