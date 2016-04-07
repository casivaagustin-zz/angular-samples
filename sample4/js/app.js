angular.module("sample4", [
	"ngRoute", 
	"sample4.index", 
	"sample4.detail"
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
