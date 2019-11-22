import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Layout from '../../components/Layout';

import { fetchHistory } from '../../redux/actions/historyActions';

import configs from '../../configs';

const { colors, leaderboard } = configs;

const H1 = styled.div`
	${({ absolute }) =>
		absolute &&
		`position: absolute;
	top: 8%;`}
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	* {
		margin: 0 12px;
	}

	select {
		color: ${colors.darkKhaki};
		border: thin solid ${colors.darkSlateGray};
		height: 32px;
	}
`;

const Leaderboard = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0);
	width: 80%;
	height: 72vh;
	overflow-y: scroll;
	overflow-x: hidden;
	margin-top: 32px;
	padding: 32px;
	text-align: center;
`;

const HistoryPage = ({ path }) => {
	const dispatch = useDispatch();
	const refSelect = useRef(null);
	const { records, hasRecords } = useSelector((state) => state.history);
	const { options: modes, display } = leaderboard;
	const [activeMode, setActiveMode] = useState(modes[0]);

	const change = ({ target }) => setActiveMode(target.value);

	const hasRecordsNotNULL = () =>
		hasRecords &&
		records[activeMode].sessions.filter((r) => r.username !== null).length > 0;

	const info = (record) => {
		const keys = Object.keys(display);
		let string = '';

		keys.forEach(
			(k) => (string += display[k].replace('x', `<strong>${record[k]}</strong>`))
		);

		return { __html: string };
	};

	useEffect(() => {
		fetchHistory(dispatch);
	}, [dispatch]);

	return (
		<Layout path={path}>
			<H1 absolute={hasRecordsNotNULL()}>
				<h1>Game Leaderboard</h1>
				<select ref={refSelect} onChange={change} defaultValue={modes[0]}>
					{modes.map((option, i) => (
						<option value={option} key={i}>
							{option}
						</option>
					))}
				</select>
			</H1>
			{hasRecordsNotNULL() && (
				<Leaderboard className="app__leaderboard">
					{records[activeMode].sessions.map(
						(r, i) => r.username && <p key={i} dangerouslySetInnerHTML={info(r)} />
					)}
				</Leaderboard>
			)}
		</Layout>
	);
};

export default HistoryPage;
