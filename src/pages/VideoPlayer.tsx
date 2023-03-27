import React, { useRef, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import {
	setBrightnessValue,
	setContrastValue,
	setSharpnessValue,
	setSaturationValue,
} from '../slices/colorSlice'
import { RootState } from '../store/store'
import Client from '../services/clientService'

const VideoPlayer: React.FC = () => {

	const media = useMemo(() => new (Client as any)(), [])

	const dispatch = useAppDispatch()
	const { isAuth, brightnessValue, contrastValue, sharpnessValue, saturationValue } =
		useAppSelector((state: RootState) => state.color)

	const useStunRef = useRef<HTMLInputElement | null>(null)
	const stopRef = useRef<HTMLButtonElement | null>(null)
	const startRef = useRef<HTMLButtonElement | null>(null)

	const setBrightness = (event: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch(setBrightnessValue(Number(event.target.value)))
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

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		event.preventDefault()
		if (isAuth) {
			localStorage.setItem('brightnessPreset', String(brightnessValue))
			localStorage.setItem('contrastPreset', String(contrastValue))
			localStorage.setItem('sharpnessPreset', String(sharpnessValue))
			localStorage.setItem('saturationPreset', String(saturationValue))
		}
		media.test()
	}

	return (
		<div className='video-player'>
			<div style={{ display: 'flex' }}>
				<button
					ref={startRef}
					id="start"
					onClick={() => media.start()}
				>Старт</button>
				<button
					ref={stopRef}
					id="stop"
					style={{ display: 'none' }}
					onClick={() => media.stop()}
				>Стоп</button>
				{/* <div style={{ display: 'flex', flexDirection: 'column' }}>
					<label htmlFor="contrast">контрастность</label>
					<input
						id="contrast"
						placeholder="contrast"
						type="number"
					/>
					<label htmlFor="brightness">яркость</label>
					<input
						id="brightness"
						placeholder="brightness"
						type="number"
					/>
					<label htmlFor="saturation">насыщенность</label>
					<input
						id="saturation"
						placeholder="saturation"
						type="number"
					/>
				</div> */}
				{/* <button
					id="test"
					onClick={() => media.test()}
				>Тест</button> */}
			</div>
			<div id="media">
				{/* <audio id="audio" autoPlay={true}></audio> */}
				<video id="video" autoPlay={true} playsInline={true} controls muted loop>
				</video>
			</div>

			<form>
				<p className="range-field">
					<label>
						<span>Настройка яркости</span>
						<input
							type="range"
							id="brightness"
							min="0"
							max="100"
							onChange={setBrightness}
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
				<p className="range-field">
					<label>
						<span>Настройка резкости</span>
						<input
							type="range"
							id="sharpness"
							min="0"
							max="100"
							onChange={setSharpness}
							disabled
						/>
					</label>
				</p>
				{
					!window.navigator.userAgent.includes('Firefox' || 'Chrome') && (
						<div className="use-stun">
							<label>
								<input
									id="use-stun"
									type="checkbox"
									ref={useStunRef}
								/>
								STUN сервер
							</label>
						</div>)
				}
				<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
					<button id="test" type='submit' onClick={handleSubmit}>
						Применить настройки
					</button>
				</div>

			</form>
		</div>
	)
}

export default VideoPlayer