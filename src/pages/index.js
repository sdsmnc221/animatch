import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = () => (
	<Layout>
		<h1>Hi people</h1>
		<p>Welcome to animatch.</p>
		<p>Now go build something great.</p>
		<Link to="/play/">Play</Link>
	</Layout>
);

export default IndexPage;
