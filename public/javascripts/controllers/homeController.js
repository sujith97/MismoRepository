(function() {
	angular.module("home.controller", ["home.service"])
	.controller("homeController", HomeController);

	HomeController.$inject = ["$state", "homeService", "$location"];
	function HomeController($state, homeService, $location) {
		var vm = this;
		homeService.getAllTypes().then(function(data) {
			vm.mismoTypes = data;
		})

		vm.isActive = function(param) {
			return $location.path() === param;
		}

		vm.selectType = function(mismoType) {
			$state.go("mismo.mismotype", {mismoType: mismoType});
		}
	}

})();