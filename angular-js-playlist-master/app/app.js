//This is the model
var myNinjaApp = angular.module('myNinjaApp',[]);

//myNinjaApp.config(function(){
//
//});

//myNinjaApp.run(function(){
//
//});

myNinjaApp.controller("NinjaController",['$scope','$http',function($scope,$http){
//	$scope.message="hey all"
$scope.removeNinja = function(ninja){
	var removedNinja = $scope.ninjas.indexOf(ninja);
	$scope.ninjas.splice(removedNinja, 1);
//ninja.available = false;
}
$scope.addNinja = function(){
	$scope.ninjas.push({
		name: $scope.newNinja.name,
		rate: parseInt($scope.newNinja.rate),
		age: parseInt($scope.newNinja.age),
		available: true
	});
	$scope.newNinja.name="";
	$scope.newNinja.rate="";
	$scope.newNinja.age="";
}
$scope.expandNinja = function(ninja){
	var expandedNinja = $scope.ninjas.ninja;
}
	

$scope.ninjas=[{
	name: "yoshi",
	age: 12,
	rate: 50,
	available: true,
	pic: "C:/Users/david/Downloads/burger.jpeg"
}, {
	name: "Crystal",
	age: 26,
	rate: 300,
	available: true,
	pic: "C:/Users/david/Downloads/owl.jpg"
}, {
	name: "Ryu",
	age: 33,
	rate: 10,
	available: true,
	pic: "C:/Users/david/Downloads/kaleidoscope.jpg"
}, {
	name: "Neruda",
	age: 65,
	rate: 1000,
	available: true,
	pic: "C:/Users/david/Downloads/turtle.jpg"
}]

$http.get('data/ninjas.json').success(function(data){
$scope.ninja = data;
});

}]);
