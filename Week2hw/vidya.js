(function(){
	var app = angular.module('store', [ ]);

	app.controller('MovieController', function(){
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
		title: 'There Will be Blood',
		year: 2007,
		description: 'Daniel Plainview makes his lucky strike and becomes a self-made tycoon but, as his fortune grows, he deviates into moral bankruptcy.',
		actors: 'Daniel-Day Lewis, Dillon Freasier',
		review: 'Best movie of all time? No. Greatest movie ever made? Yes. 10/10',
		canPurchase: true,
		soldOut: false,
			images: [
				{
					thumb: 'images/twb2.jpg'
				},
				{
					thumb: 'images/twb1.jpg'
				}
			]
			},

		{
		title: 'Alien',
		year: 1979,
		description: 'The commercial vessel Nostromo receives a distress call from an unexplored planet. After searching for survivors, the crew heads home only to realize that a deadly bioform has joined them.',
		actors: 'Sigourney Weaver, Tom Skerritt',
		review: 'Like to be scared? Put this one on and grab a new pair of pants',
		canPurchase: true,
		soldOut: false,
			images: [
				{
					thumb: 'images/alien2.jpg'
				},
				{
					thumb: 'images/alien1.jpg'
				}
			]
		},

		{
		title: 'The Thing',
		year: 1982,
		description: 'Scientists in the Antarctic are confronted by a shape-shifting alien that assumes the appearance of the people that it kills.',
		actors: 'Kurt Russel, Keith David',
		review: 'A nearly flawless horror film. Mystery and suspense are constant in this gory Kurt Russel classic.',
		canPurchase: true,
		soldOut: false,
			images: [
				{
					thumb: 'images/thing2.jpg'
				},
				{
					thumb: 'images/thing1.jpg'
				}
			]
		},

		{
		title: 'Mad Max 2: The Road Warrior',
		year: 1981,
		description: 'In the post-apocalyptic Australian wasteland, a cynical drifter agrees to help a small, gasoline rich, community escape a band of bandits.',
		actors: 'Mel Gibson, Bruce Spence',
		review: 'Prepare to be on the edge of your seat. Incredible stunt work and high octane action scenes shine bright in Mel Gibsons true debut film.',
		canPurchase: true,
		soldOut: false,
			images: [
				{
					thumb: 'images/warrior2.jpg'
				},
				{
					thumb: 'images/warrior1.jpg'
				}
			]
		},

	];

})();