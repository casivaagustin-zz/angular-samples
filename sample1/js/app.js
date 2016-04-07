var app = angular.module("sample1", []);

app.controller("helloCtrl", function($scope) {
	$scope.app = {
		message: "Hello Folks!"
	}
});