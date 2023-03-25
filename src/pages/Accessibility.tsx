import React from 'react'

const Accessibility = () => {
	return (
		<form action="#" className='accessibility'>
			<label>
				<input type="checkbox" className="filled-in" />
				<span>Режим для слабовидящих</span>
			</label>
			<label>
				<input type="checkbox" className="filled-in" />
				<span>Режим для людей с дальтонизмом</span>
			</label>
			<label>
				<input type="checkbox" className="filled-in" />
				<span>Черно-белый режим</span>
			</label>
			<p className="range-field">
				<label>
					<span>Настройка яркости</span>
					<input type="range" id="lightness" min="0" max="100" />
				</label>
			</p>
			<p className="range-field">
				<label>
					<span>Настройка контрастности</span>
					<input type="range" id="contrast" min="-100" max="100" />
				</label>
			</p>
		</form>
	)
}

export default Accessibility