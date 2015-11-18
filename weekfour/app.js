(function() {

	// angular setter
	var app = angular.module('store', ['app-components']);

	// Store Controller
	app.controller('StoreController', function($http, $log) {

		// assign to the view
		this.products = [];
		this.date = new Date();

		var vm = this;

		$http.get('model/products.json')
			.success ( function (data) {
				$log.log(data, vm);
				vm.products = data;
			});

	});

	// Panel / Tabs Controller
	app.controller('PanelController', function() {
		console.log('panel controller');
		this.tab = 1;

		this.selectTab = function(tabIndex) {
			this.tab = tabIndex;
		};

		this.isSelected = function(tabIndex) {
			return tabIndex === this.tab;
		};
	});

	app.controller('ReviewFormController', function() {
		this.formReview = {
			stars: '5'
		};

		this.addReview = function(product) {
			product.reviews.push(this.formReview);
		}
	});

	// model data
	// var gems = [{

})();