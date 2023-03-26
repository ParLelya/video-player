import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { RootState } from '../store/store'
import {
	setLightnessValue,
	setContrastValue,
	setSharpnessValue,
	setSaturationValue,
} from '../slices/colorSlice'

const VideoPlayer: React.FC = () => {

	const dispatch = useAppDispatch()
	const { lightnessValue, contrastValue, sharpnessValue, saturationValue } = useAppSelector((state: RootState) => state.color)

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
		localStorage.setItem('colorPreset', String([lightnessValue, contrastValue, sharpnessValue, saturationValue]))
	}

	return (
		<div className='video-player'>
			<video controls muted width="100%">
				<source src="http://localhost:3000/video" type="video/mp4" />
			</video>
			<form>
				<p className="range-field">
					<label>
						<span>Настройка яркости</span>
						<input
							type="range"
							id="lightness"
							min="0"
							max="100"
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
							onChange={setSaturation}
						/>
					</label>
				</p>
				<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
					<button type='submit' onClick={handleSubmit}>
						Применить настройки
					</button>
				</div>

			</form>
		</div>
	)
}

export default VideoPlayer