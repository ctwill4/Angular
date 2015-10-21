(function() {


	var app = angular.module('store', []);

	app.controller('StoreController', function($scope) {
		console.log('scope: ', $scope);
		this.products = gem;
	});

	var gem = [{
		name: 'Diamond',
		price: '8,000',
		description: 'Cool Rock!',
		canPurchase: false,
		soldOut: false
	},
	{
		name: 'Ruby',
		price: '2,000',
		description: 'Cool Rock!',
		canPurchase: true,
		soldOut: true
	},
	{
		name: 'Sapphire',
		price: '4,000',
		description: 'Cool Rock!',
		canPurchase: true,
		soldOut: true
	},
	{
		name: 'Emerald',
		price: '6,000',
		description: 'Cool Rock!',
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'Jelly',
		price: '10,000',
		description: 'Cool Rock!',
		canPurchase: false,
		soldOut: true
	}];


})();