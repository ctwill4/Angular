// angular.module('reddit')
// 	.service('RedditService', function($http) {

// 		console.log('RedditService: ', this);

// 		this.getItems = function() {
// 			console.log('get items');
// 		}
// 	});

angular.module('reddit').service('RedditService', function($http, $q) {
  /**
   * function getData
   * service call pattern using angular $q promises
   * resolve returns response, reject returns error
   * @returns {promise.promise|jQuery.promise}
   */
	this.nextPage = function(after) {

		// define promise
	    var deferred = $q.defer(),
	    url = 'http://api.reddit.com/top?after=' + after + '&jsonp=JSON_CALLBACK';

	    $http.jsonp(url)
	      .success(function (results) {
	        var data = results || [];
	        // 2 assign the result
	        deferred.resolve(data); // this is our success. This should be passed back.
	      })
	      .error(function (error) {
	      	// 2 assign the result
	        deferred.reject (error); // this is our faliure.
	      });

	      // 3 returns it back
	    return deferred.promise;
  	};
});