const configs = {
	dimensions: {
		W: () => window.innerWidth,
		H: () => window.innerHeight
	},
	colors: {
		text: 'rgba(0, 0, 0, o)',
		bg: 'rgba(255, 255, 255, o)',
		beige: '#f4ede6',
		peru: '#bf683e',
		darkKhaki: '#bf8c63',
		rosyBrown: '#c1a289',
		darkSlateGray: '#29454a'
	},
	font: {
		family: 'Montserrat',
		size: {},
		weight: {}
	},
	menu: {
		rules: {
			buttonLabel: 'Rules',
			typeLabel: 'rules'
		},
		credits: {
			buttonLabel: 'Credits',
			typeLabel: 'credits'
		},
		extLink: (path) => ({
			label: path.includes('play') ? 'History' : 'Play',
			to: `/app/${path.includes('play') ? 'history' : 'play'}`
		})
	},
	modals: {
		rules: {
			label: 'rules'
		},
		credits: {
			label: 'credits'
		},
		endgame: {
			label: 'endgame',
			status: {
				WIN: 'You Won!',
				LOSE: 'You Lost...'
			}
		}
	},
	gameSettings: {
		title: 'Configure your game settings!',
		reset: 'Reset',
		valid: `OK let's match!`,
		playModes: {
			label: 'You want this...',
			options: [
				{
					label: 'Easy',
					value: 7
				},
				{
					label: 'Normal',
					value: 14
				},
				{
					label: 'Hard',
					value: 28
				},
				{
					label: 'Hell',
					value: 56
				}
			]
		},
		timeLimit: {
			label: 'Set a timer?',
			required: ['Hell'],
			options: [
				{
					label: 'No',
					value: false
				},
				{
					label: 'Yes',
					value: true
				}
			]
		},
		images: {
			labels: 'What kind of animals do you want to see?',
			options: ['Cat', 'Dog', 'Bird', 'Panda', 'Fox', 'Koala', 'Pikachu']
		}
	},
	leaderboard: {
		options: ['Easy', 'Normal', 'Hard', 'Hell'],
		display: {
			username: 'Player x ',
			country: 'from x ',
			endGameStatus: 'has x ',
			moves: 'within x moves ',
			timeCreated: 'at x.'
		}
	},
	API: {
		ip: 'http://ip-api.com/json',
		cors: 'https://cors-anywhere.herokuapp.com/',
		endpoint: 'https://some-random-api.ml/',
		animals: [
			{
				label: 'Cat',
				value: 'img/cat'
			},
			{
				label: 'Dog',
				value: 'img/dog'
			},
			{
				label: 'Bird',
				value: 'img/birb'
			},
			{
				label: 'Panda',
				value: 'img/panda'
			},
			{
				label: 'Fox',
				value: 'img/fox'
			},
			{
				label: 'Koala',
				value: 'img/koala'
			},
			{
				label: 'Pikachu',
				value: 'pikachuimg'
			}
		]
	},
	SERVER: {
		endpoint: 'https://animatch-server.herokuapp.com/',
		fetch: 'fetch',
		save: 'save'
	}
};

export default configs;
