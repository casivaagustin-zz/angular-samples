var app = angular.module("sample3", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		"templateUrl" : "tpl/index.html",
		"controller" : "indexCtrl"
	});
	$routeProvider.when("/detail", {
		"templateUrl" : "tpl/detail.html",
		"controller" : "detailCtrl"
	});
});

app.controller("indexCtrl", function($scope) {

	$scope.last = 0;
	$scope.items = [
	];	
	
	$scope.remove = function (item) {
		var index = $scope.items.indexOf(item);
		$scope.items.splice(index, 1);
	}
	
	$scope.add = function () {	
		$scope.last++;
		$scope.items.push({"name" : "item-" + $scope.last });
	}
	
	$scope.show = function(){
		console.log($scope.items);
	}
});

app.controller("detailCtrl", function($scope) {
	$scope.message = "All right!, another view";
});