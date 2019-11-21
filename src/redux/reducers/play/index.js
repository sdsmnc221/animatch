import {
	PLAY_SET_CONFIGS,
	PLAY_RESET_CONFIGS,
	PLAY_COUNT_MOVES
} from '../../actionTypes';
import initialStates from '../../initialStates';

import configs from '../../../configs';

function play(state = initialStates.play, action) {
	switch (action.type) {
		case PLAY_SET_CONFIGS: {
			const { gameSettings } = configs;
			const { payload: userSettings } = action;

			return {
				...state,
				isset: true,
				configs: {
					mode: userSettings.playMode,
					timerActivated: userSettings.timeLimit === 'Yes',
					timer: userSettings.timeLimitValue,
					animals: userSettings.images,
					pairsNb: gameSettings.playModes.options.find(
						(o) => o.label === userSettings.playMode
					).value
				}
			};
		}
		case PLAY_COUNT_MOVES: {
			const { moves } = state;

			return {
				...state,
				moves: moves + 1
			};
		}
		case PLAY_RESET_CONFIGS: {
			return {
				...initialStates.play
			};
		}
		default:
			return state;
	}
}

export default play;
