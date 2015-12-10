(function() {
	angular.module('myApp', ['ngMaterial'])
		.controller('myController', ['$scope', '$http', function($scope, $http) {

			$scope.results = [];

			// $scope.searchTerm = "test";

			$scope.getImageUrl = function(picture) {
				return "http://farm" + picture.farm + ".staticflickr.com/" + picture.server + 
				"/" + picture.id + "_" + picture.secret + ".jpg";
			};

			$scope.search = function() {

				console.log("search ran with term ", $scope.searchTerm);

				$http({
					method: 'GET',
					url: 'https://api.flickr.com/services/rest',
					params: {
						method: 'flickr.photos.search',
						api_key: 'c6d74f9eb6bdcc33ef08e6ca1fd6a923',
						privacy_filter: 1,
						text: $scope.searchTerm,
						format: 'json',
						nojsoncallback: 1 
					}
				}).success(function(data) {

					$scope.results = [];

					angular.forEach(data.photos.photo, function(item) {
						if(item.farm !== 6) {
							$scope.results.push(item);
						}
					});
				}).error(function(error) {
					console.error(error);
				});
			};

			$scope.search();

		}]);
})(); 

// http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg