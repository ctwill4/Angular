(function(){
	var app = angular.module('app', [ ]);

	app.controller('GameController', function(){
		this.products = games;
	});

	var games = [

		{
		title: 'The Last of Us',
		system: 'PS 3 + 4',
		description: 'Third Person Action',
		canPurchase: true,
		soldOut: true,
		},

		{
		title: 'Dark Souls',
		system: 'PC, PS3, XBOX 360',
		description: 'Action-RPG',
		canPurchase: false,
		soldOut: true,
		},

		{
		title: 'Super Metroid',
		system: 'SNES',
		description: 'Side-Scrolling Platformer',
		canPurchase: true,
		soldOut: true,
		},

		{
		title: 'Resident Evil 2',
		system: 'PS1',
		description: 'Adventure Horror',
		canPurchase: true,
		soldOut: false,
		},

		{
		title: 'Counter-Strike',
		system: 'PC',
		description: 'First Person Shooter',
		canPurchase: false,
		soldOut: true,
		},

	];

})();