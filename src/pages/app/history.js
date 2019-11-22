import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from '../../components/Layout';
import { fetchHistory } from '../../redux/actions/historyActions';

const HistoryPage = ({ path }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		fetchHistory(dispatch);
	}, [dispatch]);

	return (
		<Layout path={path}>
			<h1>Game records</h1>
		</Layout>
	);
};

export default HistoryPage;
