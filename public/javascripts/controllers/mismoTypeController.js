(function() {
	angular.module("mismotype.controller", ["mismotype.service"])
	.controller("mismoTypeController", MismoTypeController);

	MismoTypeController.$inject = ["$state", "$stateParams", "mismoTypeService"];
	function MismoTypeController($state, $stateParams, mismoTypeService) {
		var vm = this;
		mismoTypeService.getType($stateParams.mismoType).then(function(data) {
			vm.mismoType = data;
		});
	}

})();