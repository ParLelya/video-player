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

const Accessibility = () => {
	const dispatch = useAppDispatch()
	const { lightnessValue, contrastValue, sharpnessValue, saturationValue } = useAppSelector((state: RootState) => state.color)

	const switchGreyShades = () => {
		dispatch(setGrayScaleValue(100))
	}

	const setLightness = (event: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch(setLightnessValue(Number(event.target.value)))
	}

	const setContrast = (event: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch(setContrastValue(Number(event.target.value)))
	}

	const setSharpness = (event: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch(setSharpnessValue(Number(event.target.value)))
	}

	const setSaturation = (event: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch(setSaturationValue(Number(event.target.value)))
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
			<button type='submit'>
				Применить настройки
			</button>
		</form>
	)
}

export default Accessibility