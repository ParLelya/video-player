import React from 'react'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setIsAuth } from '../slices/colorSlice';
import { RootState } from '../store/store';

const Navigation: React.FC  = () => {

	const dispatch = useAppDispatch()
	const { isAuth } = useAppSelector((state: RootState) => state.color.isAuth)

	const login = () => {
		dispatch(setIsAuth(!isAuth))
	}

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
						Доступная среда
					</Link>

				</nav>
				<div className='ui-form'>
					<SearchBar />
					<button className='login hide-on-med-and-down' onClick={login}>
						<span> <i className="material-icons" style={{ fontSize: '20px' }}>account_circle</i>
							{
								isAuth
									? 'Выйти'
									: 'Войти'
							}
						</span>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Navigation