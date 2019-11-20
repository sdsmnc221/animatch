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
			label: 'endgame'
		}
	},
	gameSettings: {
		title: 'Configure your game settings!',
		valid: `OK let's match!`,
		playModes: {
			label: 'You want this...',
			options: [
				{
					label: 'Easy',
					value: 6
				},
				{
					label: 'Normal',
					value: 12
				},
				{
					label: 'Hard',
					value: 24
				},
				{
					label: 'Hell',
					value: 48
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
	content: {}
};

export default configs;
