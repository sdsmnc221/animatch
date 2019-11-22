import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { resetConfigs } from '../../redux/actions/playActions';
import {
	fetchImages,
	dumpImages,
	resetGame
} from '../../redux/actions/sessionActions';

import Layout from '../../components/Layout';
import GameSettings from '../../components/GameSettings';
import Grid from '../../components/Grid';
import Button from '../../components/Button';
import UsernameField from '../../components/UsernameField';

import configs from '../../configs';

const Playfield = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
`;

const Controller = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	padding: 16px 16px 0 0;
`;

const PlayPage = ({ path }) => {
	const dispatch = useDispatch();
	const profile = useSelector((state) => state.profile);
	const play = useSelector((state) => state.play);
	const session = useSelector((state) => state.session);

	const { username } = profile;
	const { isset, configs: gameSettings } = play;
	const { cards, preImages, moves, fetchingImages } = session;

	const reset = () => {
		dumpImages(dispatch);
		resetConfigs(dispatch);
		resetGame(dispatch);
	};

	useEffect(() => {
		if (isset) fetchImages(dispatch, gameSettings, preImages);
	}, [isset, gameSettings, dispatch, preImages.length]);

	return (
		<Layout path={path}>
			{!isset && (
				<>
					<UsernameField username={username} absolute />
					<GameSettings />
				</>
			)}
			{isset && !fetchingImages && (
				<Playfield>
					<Grid cards={cards} />
					<Controller>
						<p className="amatic">Moves: {moves}</p>
						<Button label={configs.gameSettings.reset} click={reset} />
					</Controller>
				</Playfield>
			)}
		</Layout>
	);
};

export default PlayPage;
