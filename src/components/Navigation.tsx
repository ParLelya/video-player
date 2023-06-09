import React from 'react'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';
import { RootState } from '../store/store';

const Navigation: React.FC = () => {

	const { isAuth } = useAppSelector((state: RootState) => state.user)

	return (
		<header>

			<div className='header'>
				<Link to="/">
					<img src='./logo.svg' className='my-logo' alt='KION logo' />
				</Link>
				<nav className="nav hide-on-med-and-down">
					<Link to="/">
						Главная
					</Link>

					<Link to="/mediaplayer/1">
						Телеканалы
					</Link>

					<Link to="/mediaplayer/2">
						Фильмы
					</Link>

					<Link to="/mediaplayer">
						Сериалы
					</Link>

					<Link to="/accessibility">
						Доступная среда
					</Link>

				</nav>

				<SearchBar />
				<button className='login hide-on-med-and-down'>
					<Link to='/myprofile'>
						<i className="material-icons" style={{ fontSize: '20px' }}>account_circle</i>
						{
							isAuth
								? 'Профиль'
								: 'Войти'
						}
					</Link>
				</button>
			</div>
		</header>
	)
}

export default Navigation