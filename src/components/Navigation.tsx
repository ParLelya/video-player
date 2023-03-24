import React from 'react'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<header>
			<div className='header'>
				<img src='./logo.svg' className='brand-logo' alt='logo' />
				<nav className="nav">
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

					<Link to="/">
						{/* <i className="material-icons">settings_accessibility</i> */}
						<strong>Доступная среда</strong>
					</Link>
					{/*TODO: Сделать по клику отдельную страницу, поменять стиль выделения */}

				</nav>
				<div className='ui-form'>
					<SearchBar />
					<button className='login'>
						<i className="material-icons" style={{ fontSize: '20px' }}>account_circle</i>
						<label>Войти</label>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Navigation