import React, { useRef, useState } from 'react'
import { useAppSelector } from '../hooks/hooks'
import { RootState } from '../store/store'
import { applyTheme } from './Home'

const Accessibility: React.FC = () => {

	const { isAuth } = useAppSelector((state: RootState) => state.user)

	const fontSizeIncreaseRef = useRef<HTMLInputElement | null>(null)
	const [fzInc, setFzInc] = useState(false)
	const handleFzChange = () => {
		setFzInc(!fzInc)
	}

	const grayScaleRef = useRef<HTMLInputElement | null>(null)
	const [gray, setGray] = useState(false)
	const handleGrayChange = () => {
		setGray(!gray)
	}

	const protanopiaRef = useRef<HTMLOptionElement | null>(null)
	const [noRed, setNoRed] = useState(false)
	const handleRedRemove = () => {
		setNoRed(!noRed)
	}

	const deuteranopiaRef = useRef<HTMLOptionElement | null>(null)
	const [noGreen, setNoGreen] = useState(false)
	const handleGreenRemove = () => {
		setNoGreen(!noGreen)
	}

	const tritanopiaRef = useRef<HTMLOptionElement | null>(null)
	const [noBlue, setNoBlue] = useState(false)
	const handleBlueRemove = () => {
		setNoBlue(!noBlue)
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

	return (
		<form className='accessibility'>
			<legend>Выберете режим отображения</legend>
			<div>
				<p>
					<label>
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
					<label>
						<input
							type="radio"
							name='access'
							id='subtitles'

						/>
						<span>Режим для слабослышащих</span>
					</label>
				</p>
				<p>
					<label>
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
			</div>
			<p>
				<label>
					<span>Режим для людей с дальтонизмом</span>
				</label>
				<select name='access'>
					<option
						id='default'
					>Нет</option>
					<option
						id='protanopia'
						ref={protanopiaRef}
						className={noRed ? 'active' : ''}
						onClick={handleRedRemove}
					>Протанопия</option> {/*нет красного*/}
					<option
						id='deuteranopia'
						ref={deuteranopiaRef}
						className={noGreen ? 'active' : ''}
						onClick={handleGreenRemove}
					>Дейтеранопия</option> {/*нет зеленого*/}
					<option
						id='tritanopia'
						ref={tritanopiaRef}
						className={noBlue ? 'active' : ''}
						onClick={handleBlueRemove}
					>Тританопия</option> {/*нет синего*/}
				</select>
			</p>
			<button type='submit' onClick={handleSubmit}>
				Применить настройки
			</button>
		</form>
	)
}

export default Accessibility