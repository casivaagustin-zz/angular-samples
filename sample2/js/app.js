var app = angular.module("sample2", []);

app.controller("dataCtrl", function($scope) {

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