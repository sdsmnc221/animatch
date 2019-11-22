const Record = ({ profile, play, session }) => {
	const { configs } = play;
	return {
		mode: configs.mode,
		username: profile.username,
		country: profile.country,
		timer: configs.timer,
		endGameStatus: session.endGameStatus,
		timeCreated: session.timeCreated,
		timeElapsed: session.timeElapsed,
		moves: session.moves,
		favImage: session.favImage
	};
};

export default Record;
