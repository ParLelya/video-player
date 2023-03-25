import React from 'react'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<header>
			<div className='header'>
				<img src='./logo.svg' className='my-logo' alt='logo' />
				<nav className="nav hide-on-med-and-down">
					<Link to="/">
						Главная
					</Link>

					<Link to="/">
						Телеканалы
					</Link>

					<Link to="/">
						Фильмы
					</Link>

					<Link to="/">
						Сериалы
					</Link>

					<Link to="/accessibility">
						{/* <i className="material-icons">settings_accessibility</i> */}
						Доступная среда
					</Link>
					{/*TODO: Сделать по клику отдельную страницу, поменять стиль выделения */}

				</nav>
				<div className='ui-form'>
					<SearchBar />
					<button className='login hide-on-med-and-down'>
						<i className="material-icons" style={{ fontSize: '20px' }}>account_circle</i>
						<label>Войти</label>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Navigation