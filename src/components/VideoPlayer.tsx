import React, { useRef, useMemo, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import {
	setBrightnessValue,
	setContrastValue,
	setSharpnessValue,
	setSaturationValue,
	setSubtitles,
	setNoEpilepsy,
} from '../slices/colorSlice'
import { RootState } from '../store/store'
import Client from '../services/clientService'
import AccessibilityForm from './AccessibilityForm';

const VideoPlayer: React.FC = () => {

	const media = useMemo(() => new (Client as any)(), [])

	const dispatch = useAppDispatch()
	const { brightnessValue, contrastValue, saturationValue, subtitles, noEpilepsy } =
		useAppSelector((state: RootState) => state.color)
	const { isAuth } = useAppSelector((state: RootState) => state.user)

	useEffect(() => {
		if (isAuth) {
			setBrightnessValue(Number(localStorage.getItem('brightnessPreset')))
			setContrastValue(Number(localStorage.getItem('contrastPreset')))
			setSaturationValue(Number(localStorage.getItem('saturationPreset')))
			// setsharpnessValue(Number(localStorage.getItem('sharpnessPreset')))
			setSubtitles(!!localStorage.getItem('subtitles'))
			setNoEpilepsy(!!localStorage.getItem('noEpilepsy'))
		}
	}, [isAuth])

	const useStunRef = useRef<HTMLInputElement | null>(null)
	const subsRef = useRef<HTMLInputElement | null>(null)
	const noEpilepsyRef = useRef<HTMLInputElement | null>(null)
	const stopRef = useRef<HTMLButtonElement | null>(null)
	const startRef = useRef<HTMLButtonElement | null>(null)
	const formRef = useRef<HTMLFormElement | null>(null)

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
			localStorage.setItem('saturationPreset', String(saturationValue))
			// localStorage.setItem('sharpnessPreset', String(sharpnessValue))
			localStorage.setItem('subtitles', String(subtitles))
			localStorage.setItem('noEpilepsy', String(noEpilepsy))
		}
		media.test()
	}

	const openSettings = () => {
		if (formRef.current?.style.display === 'none') {
			formRef.current!.style.display = 'flex'
		} else {
			formRef.current!.style.display = 'none'
		}
	}

	return (
		<div className='video-player'>
			<div id="media">
				<div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
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

					<button
						id="settings"
						onClick={openSettings}
					>Настройки</button>
				</div>
				{/* <audio id="audio" autoPlay={true}></audio> */}
				<video id="video" autoPlay={true} playsInline={true} controls muted loop>
				</video>
			</div>

			<form ref={formRef} style={{ display: 'none' }}>
				<p className="range-field">
					<label>
						<span>Настройка яркости</span>
						<input
							type="range"
							id="brightness"
							min="0"
							max="100"
							step='1'
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
							max="3"
							step='0.05'
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
							max="3"
							step='0.05'
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
							max="1"
							step='0.05'
							onChange={setSharpness}
							disabled
						/>
					</label>
				</p>
				<p className="subtitles check">
					<label>
						<input
							type="checkbox"
							name='access'
							id='subtitles'
							ref={subsRef}
							onChange={() => setSubtitles(!subtitles)}
						/>
						<span>Включить субтитры</span>
					</label>
				</p>
				<p className="epilepsy check">
					<label>
						<input
							type="checkbox"
							name='access'
							id='epilepsy'
							ref={noEpilepsyRef}
							onChange={() => setNoEpilepsy(!noEpilepsy)}
						/>
						<span>Режим для людей с эпилепсией</span>
					</label>
				</p>
				<p className="use-stun check">
					<label>
						<input
							id="use-stun"
							type="checkbox"
							ref={useStunRef}
						/>
						<span>STUN сервер</span>
					</label>
				</p>
				<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
					<button id="test" type='submit' onClick={handleSubmit}>
						Применить настройки
					</button>
				</div>
				<AccessibilityForm />
			</form>
		</div>
	)
}

export default VideoPlayer