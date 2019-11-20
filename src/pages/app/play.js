import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Layout from '../../components/Layout';

const UsernameField = styled.strong``;

const PlayPage = () => {
	const name = useSelector((state) => state.profile.username);

	return (
		<Layout>
			<h1>
				Hi <UsernameField>{name}</UsernameField>
			</h1>
		</Layout>
	);
};

export default PlayPage;
