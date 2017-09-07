angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = {};

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      	$scope.listings.push({
          code: $scope.newEntry.code,
      		name: $scope.newEntry.name,
    /*        longitude: $scope.newEntry.coordinates.longitude,
      		  latitude: $scope.newEntry.coordinates.latitude,*/
      		address: $scope.newEntry.address
      	});
      	$scope.newEntry.name="";
      	$scope.newEntry.code="";
        $scope.newEntry.coordinates.latitude="";
        $scope.newEntry.coordinates.longitude="";
      	$scope.newEntry.address="";
    };

    $scope.deleteListing = function(Building) {
      	var removedListing = $scope.listings.indexOf(Building);
      	$scope.listings.splice(removedListing, 1);
    };
    $scope.showDetails = function(entries) {
      $scope.detailedInfo=entries;
      // $scope.detailedEntry.code=$scope.entries.code;
      // $scope.detailedEntry.name=$scope.entries.name;
      // $scope.detailedEntry.coordinates.latitude=$scope.entries.coordinates.latitude;
      // $scope.detailedEntry.coordinates.longitude=$scope.entries.coordinates.longitude;
      // $scope.detailedEntry.address=$scope.entries.address;
    };
  }
]);
