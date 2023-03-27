import React from 'react'
import { useAppSelector } from '../hooks/hooks'
import { RootState } from '../store/store'

const Accessibility: React.FC = () => {

	const { isAuth } = useAppSelector((state: RootState) => state.user)

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault()
		if (isAuth) {
			// localStorage.setItem('accessibilityPreset', )
		} 
	}

	return (
		<form className='accessibility'>
			<legend>Выберете режим отображения</legend>
			<div>
				<p>
					<label>
						<input type="radio" name='access'/>
						<span>Режим для слабовидящих</span>
					</label>
				</p>
				<p>
					<label>
						<input type="radio" name='access'/>
						<span>Режим для слабослышащих</span>
					</label>
				</p>
				<p>
					<label>
						<input type="radio" name='access'/>
						<span>Черно-белый режим</span>
					</label>
				</p>
			</div>
			<p>
				<label>
					<span>Режим для людей с дальтонизмом</span>
				</label>
				<select name='access'>
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