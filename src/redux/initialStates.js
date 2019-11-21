export default {
	profile: {
		username: undefined,
		country: undefined
	},
	play: {
		isset: false,
		configs: {
			mode: undefined,
			timerActivated: false,
			timer: undefined,
			animals: undefined,
			pairsNb: undefined
		}
	},
	session: {
		images: [],
		cards: [],
		fetchingImages: false,
		hasError: false,
		currentCard1: undefined,
		currentCard2: undefined,
		matchedPairs: undefined,
		endGameStatus: undefined
	}
};
