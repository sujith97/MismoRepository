(function() {
	angular.module("mismo.repository", ["ui.router", "home.controller", "mismotype.controller"])
	.config(function($stateProvider, $urlRouterProvider) {
	  
	  $stateProvider
	    .state('mismo', {
	      url: '/mismo',
	      templateUrl: '/javascripts/partials/home.html',
	      controller: 'homeController',
	      controllerAs: 'homeCtrl'
	    })
	    .state('mismo.mismotype', {
	      url: '/type/:mismoType',
	      templateUrl: '/javascripts/partials/mismo-types.html',
	      controller: 'mismoTypeController',
	      controllerAs: 'mtCtrl'
	    });
	    $urlRouterProvider.otherwise('/mismo');
	})
	.run(function($rootScope) {
		$rootScope.constants = {
			serverAddress : 'https://powerful-ocean-9833.herokuapp.com'
		}
	})
	.controller('appController', ['$scope', function($scope) {
		
		
	}])

})();

// https://interviewtracker.herokuapp.com
// http://localhost:3000