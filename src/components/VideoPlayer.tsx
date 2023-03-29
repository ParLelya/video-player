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
import AccessibilityForm from './AccessibilityForm'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const VideoPlayer: React.FC = () => {

	const media = useMemo(() => new (Client as any)(), [])

	const dispatch = useAppDispatch()
	const { brightnessValue, contrastValue, saturationValue, subtitles, noEpilepsy } =
		useAppSelector((state: RootState) => state.color)
	const { isAuth } = useAppSelector((state: RootState) => state.user)

	const useStunRef = useRef<HTMLInputElement | null>(null)
	const subsRef = useRef<HTMLInputElement | null>(null)
	const noEpilepsyRef = useRef<HTMLInputElement | null>(null)
	const stopRef = useRef<HTMLButtonElement | null>(null)
	const startRef = useRef<HTMLButtonElement | null>(null)
	const formRef = useRef<HTMLFormElement | null>(null)

	useEffect(() => {
		if (isAuth) {
			dispatch(setBrightnessValue(Number(localStorage.getItem('brightnessPreset'))))
			dispatch(setContrastValue(Number(localStorage.getItem('contrastPreset'))))
			dispatch(setSaturationValue(Number(localStorage.getItem('saturationPreset'))))
			// dispatchsetsharpnessValue(Number(localStorage.getItem('sharpnessPreset'))))
			dispatch(setSubtitles(!!localStorage.getItem('subtitles')))
			dispatch(setNoEpilepsy(!!localStorage.getItem('noEpilepsy')))

			if (subtitles) {
				subsRef.current!.checked = true
			}

			if (noEpilepsy) {
				noEpilepsyRef.current!.checked = true
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth])

	const openSettings = () => {
		if (formRef.current?.style.display === 'none') {
			formRef.current!.style.display = 'flex'
		} else {
			formRef.current!.style.display = 'none'
		}
	}

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

	const saveSettings = () => {
		localStorage.setItem('brightnessPreset', String(brightnessValue))
		localStorage.setItem('contrastPreset', String(contrastValue))
		localStorage.setItem('saturationPreset', String(saturationValue))
		// localStorage.setItem('sharpnessPreset', String(sharpnessValue))
		localStorage.setItem('subtitles', String(subtitles))
		localStorage.setItem('noEpilepsy', String(noEpilepsy))

		const presetArray = [brightnessValue, contrastValue, saturationValue, subtitles, noEpilepsy]
		return presetArray
	}

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		event.preventDefault()
		if (isAuth) {
			saveSettings()
		}
		media.test()
	}

	const turnOnSubs = () => {
		dispatch(setSubtitles(!subtitles))
	}

	const turnOnNoEpilepsy = () => {
		dispatch(setNoEpilepsy(!noEpilepsy))
	}

	const savePreset1 = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		event.preventDefault()
		localStorage.setItem('myPreset1', saveSettings().join(','))
		toast.success('🦄 успешно сохранено!')
	}

	const savePreset2 = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		event.preventDefault()
		localStorage.setItem('myPreset2', saveSettings().join(','))
		toast.success('🦄 успешно сохранено!')
	}

	const savePreset3 = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		event.preventDefault()
		localStorage.setItem('myPreset3', saveSettings().join(','))
		toast.success('🦄 успешно сохранено!')
	}

	return (
		<div className='video-player'>
			<div id="media">
				<div style={{ display: 'flex', justifyContent: 'space-between', width: '90%', height: '10%', alignSelf: 'flex-start' }}>
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
				<video id="video" autoPlay={true} playsInline={true} controls>
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
							min="1"
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
							max="3"
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
							onChange={turnOnSubs}
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
							onChange={turnOnNoEpilepsy}
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
				{
					isAuth
						? (
							<div
								className='presets'
								style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}
							>
								<button
									className='preset-btn'
									style={{ color: 'rgb(168, 110, 167)', width: '80%', background: 'transparent', fontWeight: '500' }}
									onClick={savePreset1}
								>Сохранить пресет №1</button>
								{
									localStorage.getItem('myPreset1') &&
									<button
										className='preset-btn'
										style={{ color: 'rgb(168, 110, 167)', width: '80%', background: 'transparent', fontWeight: '500' }}
										onClick={savePreset2}
									>Сохранить пресет №2</button>
								}
								{
									localStorage.getItem('myPreset2') &&
									<button
										className='preset-btn'
										style={{ color: 'rgb(168, 110, 167)', width: '80%', background: 'transparent', fontWeight: '500' }}
										onClick={savePreset3}
									>Сохранить пресет №3</button>
								}
							</div>
						)
						: <h4 style={{ textAlign: 'center' }}>Войдите в профиль, чтобы сохранить пресеты настроек</h4>
				}
			</form>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	)
}

export default VideoPlayer