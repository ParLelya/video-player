import React, { useRef } from 'react'
import { useAppSelector } from '../hooks/hooks'
import { RootState } from '../store/store'
import { DEFAULT_THEME, applyTheme } from './Home'

const Accessibility: React.FC = () => {

	const { isAuth } = useAppSelector((state: RootState) => state.user)

	let activeTheme = localStorage.getItem('accessibilityPreset') || DEFAULT_THEME
	applyTheme(activeTheme)

	const fontSizeIncreaseRef = useRef<HTMLInputElement | null>(null)
	const grayScaleRef = useRef<HTMLInputElement | null>(null)
	const protanopiaRef = useRef<HTMLOptionElement | null>(null)
	const deuteranopiaRef = useRef<HTMLOptionElement | null>(null)
	const tritanopiaRef = useRef<HTMLOptionElement | null>(null)

	const classesList = ['fz-increase', 'grayscale', 'protanopia', 'deuteranopia', 'tritanopia']

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault()

		let currentTheme: string = ''

		if () {
			currentTheme = 'dark'
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
						<input type="radio" name='access' id='fz-increase' ref={fontSizeIncreaseRef} />
						<span>Режим для слабовидящих</span>
					</label>
				</p>
				<p>
					<label>
						<input type="radio" name='access' id='subtitles' />
						<span>Режим для слабослышащих</span>
					</label>
				</p>
				<p>
					<label>
						<input type="radio" name='access' id='grayscale' ref={grayScaleRef} />
						<span>Черно-белый режим</span>
					</label>
				</p>
			</div>
			<p>
				<label>
					<span>Режим для людей с дальтонизмом</span>
				</label>
				<select name='access'>
					<option id='default'>Нет</option>
					<option id='protanopia' ref={protanopiaRef}>Протанопия</option> {/*нет красного*/}
					<option id='deuteranopia' ref={deuteranopiaRef}>Дейтеранопия</option> {/*нет зеленого*/}
					<option id='tritanopia' ref={tritanopiaRef}>Тританопия</option> {/*нет синего*/}
				</select>
			</p>
			<button type='submit' onClick={handleSubmit}>
				Применить настройки
			</button>
		</form>
	)
}

export default Accessibility