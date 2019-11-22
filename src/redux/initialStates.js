export default {
	profile: {
		username: '',
		country: null
	},
	play: {
		isset: false,
		moves: 0,
		configs: {
			mode: null,
			timerActivated: false,
			timer: null,
			animals: null,
			pairsNb: null
		}
	},
	session: {
		images: [],
		cards: [],
		fetchingImages: false,
		hasError: false,
		currentCards: [],
		matchedPairs: [],
		endGameStatus: null,
		preImages: []
	}
};
