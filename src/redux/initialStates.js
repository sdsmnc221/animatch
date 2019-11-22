export default {
	profile: {
		username: '',
		country: null
	},
	play: {
		isset: false,
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
		moves: 0,
		preImages: [],
		timeCreated: null,
		timeElapsed: null
	},
	history: {
		records: null,
		hasRecords: false,
		hasError: false
	}
};
