(function(){
	var app = angular.module('store', [ ]);

	app.controller('GameController', function(){
		this.products = movies;
		this.date = new Date();
	});

	app.controller('PanelController', function() {
		console.log('panel controller');
		this.tab = 1;

		this.selectTab = function(tabIndex) {
			this.tab = tabIndex;
		};

		this.isSelected = function(tabIndex) {
			return tabIndex === this.tab;
		}
	});

	var movies = [

		{
		title: 'Game 1',
		description: 'Cool Game',
		price: 40,
		canPurchase: true,
		soldOut: false,
			images: [
				{
					thumb: 'images/img1.jpg'
				},
				{
					thumb: 'images/img2.jpg'
				},
				{
					thumb: 'images/img3.jpg'
				}
			]
			},

		{
		title: 'Dark Souls',
		description: 'Action-RPG',
		price: 10,
		canPurchase: true,
		soldOut: false,
			images: [
				{
					thumb: 'images/img1.jpg'
				},
				{
					thumb: 'images/img2.jpg'
				},
				{
					thumb: 'images/img3.jpg'
				}
			]
		},

		{
		title: 'Super Metroid',
		description: 'Side-Scrolling Platformer',
		price: 5,
		canPurchase: true,
		soldOut: false,
			images: [
				{
					thumb: 'images/img1.jpg'
				},
				{
					thumb: 'images/img2.jpg'
				},
				{
					thumb: 'images/img3.jpg'
				}
			]
		},

		{
		title: 'Resident Evil 2',
		description: 'Adventure Horror',
		canPurchase: true,
		soldOut: false,
			images: [
				{
					thumb: 'images/img1.jpg'
				},
				{
					thumb: 'images/img2.jpg'
				},
				{
					thumb: 'images/img3.jpg'
				}
			]
		},

		{
		title: 'Counter-Strike',
		description: 'First Person Shooter',
		canPurchase: true,
		soldOut: false,
			images: [
				{
					thumb: 'images/img1.jpg'
				},
				{
					thumb: 'images/img2.jpg'
				},
				{
					thumb: 'images/img3.jpg'
				}
			]
		},

	];

})();