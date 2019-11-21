import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { resetConfigs } from '../../redux/actions/playActions';
import { fetchImages, dumpImages } from '../../redux/actions/sessionActions';

import Layout from '../../components/Layout';
import GameSettings from '../../components/GameSettings';
import Grid from '../../components/Grid';
import Button from '../../components/Button';

import configs from '../../configs';

const UsernameField = styled.strong``;

const Playfield = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

	button {
		position: relative;
		z-index: 2;
	}
`;

const PlayPage = ({ path }) => {
	const dispatch = useDispatch();
	const profile = useSelector((state) => state.profile);
	const play = useSelector((state) => state.play);
	const session = useSelector((state) => state.session);

	const { username } = profile;
	const { isset, configs: gameSettings, moves } = play;
	const { cards, preImages } = session;

	const reset = () => {
		dumpImages(dispatch);
		resetConfigs(dispatch);
	};

	useEffect(() => {
		if (isset) fetchImages(dispatch, gameSettings, preImages);
	}, [isset, gameSettings]);

	return (
		<Layout path={path}>
			<h1>
				Hi <UsernameField>{username}</UsernameField>
			</h1>
			{!isset && <GameSettings />}
			{isset && (
				<Playfield>
					<Grid cards={cards} />
					<Button label={configs.gameSettings.reset} click={reset} />
					<p>Moves: {moves}</p>
				</Playfield>
			)}
		</Layout>
	);
};

export default PlayPage;
