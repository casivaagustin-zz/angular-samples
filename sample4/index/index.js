angular.module("sample4.index", ["ngRoute"])

.config(function($routeProvider) {
	$routeProvider.when("/", {
		"templateUrl" : "index/index.html",
		"controller" : "indexCtrl"
	});
})

.controller("indexCtrl", function($scope) {

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