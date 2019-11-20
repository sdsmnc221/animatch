import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import GameSettings from '../../components/GameSettings';

const UsernameField = styled.strong``;

const PlayPage = ({ path }) => {
	const name = useSelector((state) => state.profile.username);
	const isset = useSelector((state) => state.play.isset);
	const gameSettings = useSelector((state) => state.play.configs);

	useEffect(() => {
		console.log(gameSettings);
	}, [gameSettings]);

	return (
		<Layout path={path}>
			<h1>
				Hi <UsernameField>{name}</UsernameField>
			</h1>
			{!isset && <GameSettings />}
		</Layout>
	);
};

export default PlayPage;
