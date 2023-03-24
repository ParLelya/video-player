import React from 'react'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<header className='header'>
			<div className='row'>
				{/* <nav className="nav">
					<div className='nav-wrapper'>
						<a href="/" className="brand-logo">
							<img src='./logo.svg' alt='logo' />
						</a>
						<ul id="nav-mobile" className="hide-on-med-and-down">
							<li>
								<Link to="/">
									<span>Главная</span>
								</Link>
							</li>
							<li>
								<Link to="/">
									<span>Телеканалы</span>
								</Link>
							</li>
							<li>
								<Link to="/">
									<span>Фильмы</span>
								</Link>
							</li>
							<li>
								<Link to="/">
									<span>Сериалы</span>
								</Link>
							</li>
							<li>
								<a href="#!">
									<i className="material-icons">settings_accessibility</i>Доступная среда
								</a>
							</li>
						</ul>
						
					</div>
				</nav> */}
				<div className='col s12'>
				<SearchBar />
				<button className='login'>
					<i className="material-icons">account_circle</i>
					<label>Войти</label>
				</button>
				</div>
			</div>
		</header>
	)
}

export default Navigation