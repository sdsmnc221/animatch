import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Button from '../../components/Button';
import UsernameField from '../../components/UsernameField';

import { newUser, newUsername } from '../../redux/actions/profileActions';

const CTAWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const IndexPage = () => {
	const username = useSelector((state) => state.profile.username);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!username) newUser(dispatch);
	}, [username, dispatch]);

	return (
		<Layout path="/">
			<h1>Welcome to animatch.</h1>
			<UsernameField username={username} />
			<CTAWrapper>
				<Button
					label="Don't want this name..."
					click={() => newUsername(dispatch)}
				/>
				<Link to="/app/play/">Okay okay let's play!</Link>
			</CTAWrapper>
		</Layout>
	);
};

export default IndexPage;
