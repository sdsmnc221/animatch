import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Button';

import configs from '../../configs';
import { setConfigs } from '../../redux/actions/playActions';

const { title, valid, playModes, timeLimit, images } = configs.gameSettings;

const initialSettings = {
	playMode: playModes.options[0].label,
	timeLimit: timeLimit.options[0].label,
	timeLimitValue: undefined,
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
	};

	useEffect(() => {
		change();
	}, [refForm, settings.playModes, settings.timeLimit, settings.images.length]);

	return (
		<div className="app__settings">
			<h2>{title}</h2>

			<form onSubmit={(e) => e.preventDefault()} onChange={change} ref={refForm}>
				<fieldset>
					<legend>{playModes.label}</legend>
					<select>
						{playModes.options.map((option, i) => (
							<option value={option.label} key={i}>
								{option.label} ({option.value} pairs of cards)
							</option>
						))}
					</select>
				</fieldset>

				<fieldset>
					<legend>{timeLimit.label}</legend>
					<select defaultValue="No">
						{timeLimit.options.map((option, i) => (
							<option value={option.label} key={i}>
								{option.label} {option.value}
							</option>
						))}
					</select>
				</fieldset>

				<fieldset>
					<legend>{images.labels}</legend>
					{images.options.map((option, i) => (
						<label key={i}>
							{option}
							<input type="checkbox" value={option} defaultChecked />
						</label>
					))}
				</fieldset>

				<Button label={valid} click={validate} />
			</form>
		</div>
	);
};

export default GameSettings;
