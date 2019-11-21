import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Button from '../../components/Button';

import { newUser, newUsername } from '../../redux/actions/profileActions';

const UsernameField = styled.strong``;

const IndexPage = () => {
	const username = useSelector((state) => state.profile.username);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!username) newUser(dispatch);
	}, [username]);

	return (
		<Layout path="/">
			<h1>
				Hi <UsernameField>{username}</UsernameField>
			</h1>
			<p>Welcome to animatch.</p>
			<Button label="I don't want this name" click={() => newUsername(dispatch)} />
			<Link to="/app/play/">Okay let's play</Link>
		</Layout>
	);
};

export default IndexPage;
