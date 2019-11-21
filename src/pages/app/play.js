import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import GameSettings from '../../components/GameSettings';

import { resetConfigs } from '../../redux/actions/playActions';
import { fetchImages } from '../../redux/actions/sessionActions';
import Button from '../../components/Button';

import configs from '../../configs';

const UsernameField = styled.strong``;

const PlayPage = ({ path }) => {
	const dispatch = useDispatch();
	const name = useSelector((state) => state.profile.username);
	const isset = useSelector((state) => state.play.isset);
	const gameSettings = useSelector((state) => state.play.configs);

	const reset = () => resetConfigs(dispatch);

	useEffect(() => {
		if (isset) fetchImages(dispatch, gameSettings);
	}, [isset, gameSettings]);

	return (
		<Layout path={path}>
			<h1>
				Hi <UsernameField>{name}</UsernameField>
			</h1>
			{!isset && <GameSettings />}
			{isset && <Button label={configs.gameSettings.reset} click={reset} />}
		</Layout>
	);
};

export default PlayPage;
