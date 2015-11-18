// angular.module('reddit')  // the controller is the glue!
// 	.controller('RedditController', function(RedditService) {
// 		var vm = this;

// 		vm.RedditService = RedditService;
// 		vm.items = [];

// 		console.log('reddit ctrl: ', vm);

// 		var items = vm.RedditService.nextPage();

// 		console.log('items: ', items);

// 		vm.RedditService.nextPage()
// 			.then(function(results) {
// 				vm.items = results.data.children;
// 				console.log('items: ', items);
// 			});

// 	});

angular.module('reddit') 
	.controller('RedditController', function($scope, RedditFactory) {

	var vm = this;
	vm.reddit = new RedditFactory();

	vm.reddit.nextPage();
});