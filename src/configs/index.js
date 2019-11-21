const configs = {
	dimensions: {
		W: () => window.innerWidth,
		H: () => window.innerHeight
	},
	colors: {
		text: 'rgba(0, 0, 0, o)',
		bg: 'rgba(255, 255, 255, o)'
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
		reset: 'Anything but this. Reset my game...',
		valid: `OK let's match!`,
		playModes: {
			label: 'You want this...',
			options: [
				{
					label: 'Easy',
					value: 8
				},
				{
					label: 'Normal',
					value: 18
				},
				{
					label: 'Hard',
					value: 32
				},
				{
					label: 'Hell',
					value: 50
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
	API: {
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
	}
};

export default configs;
