angular.module("sample4.detail", ["ngRoute"])

.config(function($routeProvider) {
	$routeProvider.when("/detail", {
		"templateUrl" : "detail/detail.html",
		"controller" : "detailCtrl"
	});
})

.controller("detailCtrl", function($scope) {
	$scope.message = "All right!, another view";
});