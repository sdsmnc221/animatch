import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Button';

import configs from '../../configs';
import { setConfigs } from '../../redux/actions/playActions';
import { startGame } from '../../redux/actions/sessionActions';

const { valid, playModes, timeLimit, images } = configs.gameSettings;

const initialSettings = {
	playMode: playModes.options[0].label,
	timeLimit: timeLimit.options[0].label,
	timeLimitValue: null,
	images: images.options
};

const GameSettings = () => {
	const dispatch = useDispatch();
	const refForm = useRef(null);
	const [settings, setSettings] = useState(initialSettings);

	const change = () => {
		if (refForm.current !== null) {
			const fieldsets = [...refForm.current.querySelectorAll('fieldset')];

			setSettings((prevSettings) => ({
				...prevSettings,
				playMode: fieldsets[0].querySelector('select').value,
				timeLimit: fieldsets[1].querySelector('select').value,
				images: [...fieldsets[2].querySelectorAll('input')]
					.filter((o) => o.checked === true)
					.map((o) => o.value)
			}));
		}
	};

	const validate = (event) => {
		event.preventDefault();
		setConfigs(dispatch, settings);
		startGame(dispatch);
	};

	useEffect(() => {
		change();
	}, [refForm, settings.playModes, settings.timeLimit, settings.images.length]);

	return (
		<div className="app__settings">
			<form onSubmit={(e) => e.preventDefault()} onChange={change} ref={refForm}>
				<fieldset>
					<span>{playModes.label}</span>
					<select>
						{playModes.options.map((option, i) => (
							<option value={option.label} key={i}>
								{option.label} ({option.value} pairs of cards)
							</option>
						))}
					</select>
				</fieldset>

				<fieldset>
					<span>{timeLimit.label}</span>
					<select defaultValue="No">
						{timeLimit.options.map((option, i) => (
							<option value={option.label} key={i}>
								{option.label} {option.value}
							</option>
						))}
					</select>
				</fieldset>

				<fieldset>
					<span>{images.labels}</span>
					<div>
						{images.options.map((option, i) => (
							<p className="checkbox" key={i}>
								<input id={option} type="checkbox" value={option} defaultChecked />
								<label htmlFor={option}>{option}</label>
							</p>
						))}
					</div>
				</fieldset>

				<Button label={valid} click={validate} />
			</form>
		</div>
	);
};

export default GameSettings;
