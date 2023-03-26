import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { RootState } from '../store/store'
import { setGrayScaleValue } from '../slices/colorSlice'

const Accessibility: React.FC = () => {

	const dispatch = useAppDispatch()
	const { grayScaleValue } = useAppSelector((state: RootState) => state.color)

	const switchGreyShades = () => {
		dispatch(setGrayScaleValue(100))
	}

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		event.preventDefault()
		localStorage.setItem('accessibilityPreset', String(grayScaleValue))
	}

	return (
		<form className='accessibility'>
			<legend>Выберете режим отображения</legend>
			<div>
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
			</div>
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
			<button type='submit' onClick={handleSubmit}>
				Применить настройки
			</button>
		</form>
	)
}

export default Accessibility