import React, { useRef, useState } from 'react'
import { useAppSelector } from '../hooks/hooks'
import { applyTheme } from '../pages/Home'
import { RootState } from '../store/store'
import { DEFAULT_THEME } from './../pages/Home';

const AccessibilityForm: React.FC = () => {
	const { isAuth } = useAppSelector((state: RootState) => state.user)

	const fontSizeIncreaseRef = useRef<HTMLInputElement | null>(null)
	const [fzInc, setFzInc] = useState(false)
	const handleFzChange = () => {
		setFzInc(true)
		setGray(false)
		setNoRed(false)
		setNoGreen(false)
		setNoBlue(false)
	}

	const grayScaleRef = useRef<HTMLInputElement | null>(null)
	const [gray, setGray] = useState(false)
	const handleGrayChange = () => {
		setGray(true)
		setNoRed(false)
		setNoGreen(false)
		setNoBlue(false)
	}

	const protanopiaRef = useRef<HTMLInputElement | null>(null)
	const [noRed, setNoRed] = useState(false)
	const handleRedRemove = () => {
		setNoRed(true)
		setNoGreen(false)
		setNoBlue(false)
		setGray(false)
	}

	const deuteranopiaRef = useRef<HTMLInputElement | null>(null)
	const [noGreen, setNoGreen] = useState(false)
	const handleGreenRemove = () => {
		setNoGreen(true)
		setNoRed(false)
		setNoBlue(false)
		setGray(false)
	}

	const tritanopiaRef = useRef<HTMLInputElement | null>(null)
	const [noBlue, setNoBlue] = useState(false)
	const handleBlueRemove = () => {
		setNoBlue(true)
		setNoRed(false)
		setNoGreen(false)
		setGray(false)
	}

	const classesList = ['fz-increase', 'grayscale', 'protanopia', 'deuteranopia', 'tritanopia']

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault()
		let currentTheme: string = ''
		if (fontSizeIncreaseRef.current?.classList.contains('active')) {
			currentTheme = classesList[0]
		}
		if (grayScaleRef.current?.classList.contains('active')) {
			currentTheme = classesList[1]
		}
		if (protanopiaRef.current?.classList.contains('active')) {
			currentTheme = classesList[2]
		}
		if (deuteranopiaRef.current?.classList.contains('active')) {
			currentTheme = classesList[3]
		}
		if (tritanopiaRef.current?.classList.contains('active')) {
			currentTheme = classesList[4]
		}
		applyTheme(currentTheme)
		if (isAuth) {
			localStorage.setItem('accessibilityPreset', currentTheme)
		}
	}

	const handleFiltersRemove = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault()
		setNoBlue(false)
		setNoRed(false)
		setNoGreen(false)
		setGray(false)
		applyTheme(DEFAULT_THEME)
		if (isAuth) {
			localStorage.setItem('accessibilityPreset', DEFAULT_THEME)
		}
	}

	return (
		<>
			<div className='colorblind-radio'>
				<p>
					<label style={{ justifyContent: 'flex-start' }}>
						<input
							type="radio"
							name='access'
							id='fz-increase'
							ref={fontSizeIncreaseRef}
							className={fzInc ? 'active' : ''}
							onChange={handleFzChange}
						/>
						<span>Режим для слабовидящих</span>
					</label>
				</p>
				<p>
					<label style={{ justifyContent: 'flex-start' }}>
						<input
							type="radio"
							name='access'
							id='grayscale'
							ref={grayScaleRef}
							className={gray ? 'active' : ''}
							onChange={handleGrayChange}
						/>
						<span>Черно-белый режим</span>
					</label>
				</p>
				<p>
					<label style={{ justifyContent: 'flex-start' }}>
						<input
							type="radio"
							name='access'
							id='protanopia'
							ref={protanopiaRef}
							className={noRed ? 'active' : ''}
							onChange={handleRedRemove}
						/>
						<span>Протанопия</span>
					</label>
				</p>
				<p>
					<label style={{ justifyContent: 'flex-start' }}>
						<input
							type="radio"
							name='access'
							id='deuteranopia'
							ref={deuteranopiaRef}
							className={noGreen ? 'active' : ''}
							onChange={handleGreenRemove}
						/>
						<span>Дейтеранопия</span>
					</label>
				</p>
				<p>
					<label style={{ justifyContent: 'flex-start' }}>
						<input
							type="radio"
							name='access'
							id='tritanopia'
							ref={tritanopiaRef}
							className={noBlue ? 'active' : ''}
							onChange={handleBlueRemove}
						/>
						<span>Тританопия</span>
					</label>
				</p>
				{/* <label>
					<span>Режим для людей с дальтонизмом</span>
				</label>
				<select name='access'>
					<option
						id='default'
						ref={noneRef}
						className={none ? 'active' : ''}
						onClick={handleFiltersRemove}
					>Нет</option>
					<option
						id='protanopia'
						ref={protanopiaRef}
						className={noRed ? 'active' : ''}
						onClick={handleRedRemove}
					>Протанопия</option> {/*нет красного*/}
				{/* <option
						id='deuteranopia'
						ref={deuteranopiaRef}
						className={noGreen ? 'active' : ''}
						onClick={handleGreenRemove}
					>Дейтеранопия</option> {/*нет зеленого*/}
				{/*<option
						id='tritanopia'
						ref={tritanopiaRef}
						className={noBlue ? 'active' : ''}
						onClick={handleBlueRemove}
					>Тританопия</option> {/*нет синего*/}
				{/* </select> */}
			</div>
			<button type='submit' onClick={handleSubmit}>
				Включить выбранный режим
			</button>
			<button type='reset' onClick={handleFiltersRemove}>
				Сбросить
			</button>
		</>
	)
}

export default AccessibilityForm