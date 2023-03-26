import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setIsAuth } from '../slices/colorSlice'
import { RootState } from '../store/store'

const NavMobile: React.FC = () => {

	const dispatch = useAppDispatch()
	const { isAuth } = useAppSelector((state: RootState) => state.color)

	const login = () => {
		dispatch(setIsAuth(!isAuth))
	}

	return (
		<nav className="nav-mobile show-on-medium-and-down">
			<Link to="/">
				<i className="material-icons" style={{ fontSize: '2rem' }}>home</i><br />
				Главная
			</Link>
			<Link to="/">
				<i className="material-icons" style={{ fontSize: '2rem' }}>live_tv</i><br />
				ТВ
			</Link>
			<Link to="/">
				<i className="material-icons" style={{ fontSize: '2rem' }}>local_movies</i><br />
				Фильмы
			</Link>
			<Link to="/">
				<i className="material-icons" style={{ fontSize: '2rem' }}>video_library</i><br />
				Сериалы
			</Link>
			<Link to="/" onClick={login}>
				<i className="material-icons" style={{ fontSize: '2rem' }}>account_circle</i><br />
				{
					isAuth
						? 'Выйти'
						: 'Войти'
				}
			</Link>
			<Link to="/accessibility">
				<i className="material-icons" style={{ fontSize: '2rem' }}>settings_accessibility</i><br />
				Доступность
			</Link>
		</nav>
	)
}

export default NavMobile