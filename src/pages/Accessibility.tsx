import React from 'react'

const Accessibility = () => {
	return (
		<form action="#" className='accessibility'>
			<legend>Выберете цветовой режим или настройте самостоятельно</legend>
			<p>
				<label>
					<input type="checkbox" />
					<span>Режим для слабовидящих</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox"/>
					<span>Режим для людей с дальтонизмом</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>Черно-белый режим</span>
				</label>
			</p>
			<p className="range-field">
				<label>
					<span>Настройка яркости</span>
					<input type="range" id="lightness" min="0" max="100" value='50'/>
				</label>
			</p>
			<p className="range-field">
				<label>
					<span>Настройка контрастности</span>
					<input type="range" id="contrast" min="-100" max="100" value='0'/>
				</label>
			</p>
			<button type='submit'>
				Применить настройки
			</button>
		</form>
	)
}

export default Accessibility