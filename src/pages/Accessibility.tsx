import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { RootState } from '../store/store'
import {
	setLightnessValue,
	setContrastValue,
	setSharpnessValue,
	setSaturationValue,
	setGrayScaleValue
} from '../slices/colorSlice'

const Accessibility: React.FC = () => {

	const dispatch = useAppDispatch()
	const { lightnessValue, contrastValue, sharpnessValue, saturationValue, grayScaleValue } = useAppSelector((state: RootState) => state.color)

	const switchGreyShades = () => {
		dispatch(setGrayScaleValue(100))
	}

	const setLightness = (event: React.ChangeEvent<HTMLInputElement>): void => {
		console.log(event.target.value);	
		dispatch(setLightnessValue(Number(event.target.value)))
	}

	const setContrast = (event: React.ChangeEvent<HTMLInputElement>): void => {
		console.log(event.target.value);
		dispatch(setContrastValue(Number(event.target.value)))
	}

	const setSharpness = (event: React.ChangeEvent<HTMLInputElement>): void => {
		console.log(event.target.value);
		dispatch(setSharpnessValue(Number(event.target.value)))
	}

	const setSaturation = (event: React.ChangeEvent<HTMLInputElement>): void => {
		console.log(event.target.value);
		dispatch(setSaturationValue(Number(event.target.value)))
	}

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		event.preventDefault()
		localStorage.setItem('colorPreset', String([lightnessValue, contrastValue, sharpnessValue, saturationValue, grayScaleValue]))
	}

	return (
		<form className='accessibility'>
			<legend>Выберете цветовой режим или настройте самостоятельно</legend>
			<p>
				<label>
					<input type="checkbox" disabled />
					<span>Режим для слабовидящих</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" disabled />
					<span>Режим для слабослышащих</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" onChange={switchGreyShades} />
					<span>Черно-белый режим</span>
				</label>
			</p>
			<p>
				<label>
					<span>Режим для людей с дальтонизмом</span>
				</label>
				<select>
					<option>Нет</option>
					<option>Протанопия</option> {/*нет красного*/}
					<option>Дейтеранопия</option> {/*нет зеленого*/}
					<option>Тританопия</option> {/*нет синего*/}
				</select>
			</p>
			<p className="range-field">
				<label>
					<span>Настройка яркости</span>
					<input
						type="range"
						id="lightness"
						min="0"
						max="100"
						value={lightnessValue}
						onChange={setLightness}
					/>
				</label>
			</p>
			<p className="range-field">
				<label>
					<span>Настройка контрастности</span>
					<input
						type="range"
						id="contrast"
						min="0"
						max="200"
						value={contrastValue}
						onChange={setContrast}
					/>
				</label>
			</p>
			<p className="range-field">
				<label>
					<span>Настройка резкости</span>
					<input
						type="range"
						id="sharpness"
						min="0"
						max="100"
						value={sharpnessValue}
						onChange={setSharpness}
					/>
				</label>
			</p>
			<p className="range-field">
				<label>
					<span>Настройка насыщенности</span>
					<input
						type="range"
						id="saturation"
						min="0"
						max="200"
						value={saturationValue}
						onChange={setSaturation}
					/>
				</label>
			</p>
			<button type='submit' onClick={handleSubmit}>
				Применить настройки
			</button>
		</form>
	)
}

export default Accessibility