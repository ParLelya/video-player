import React from 'react'
import { Link } from 'react-router-dom'

const NavMobile = () => {
	return (
		<nav className="nav-mobile show-on-medium-and-down">
			<Link to="/">
				<i className="material-icons" style={{ fontSize: '2rem' }}>home</i><br/>
				Главная
			</Link>

			<Link to="/">
				<i className="material-icons" style={{ fontSize: '2rem' }}>live_tv</i><br/>
				ТВ
			</Link>

			<Link to="/">
				<i className="material-icons" style={{ fontSize: '2rem' }}>local_movies</i><br/>
				Фильмы
			</Link>

			<Link to="/">
				<i className="material-icons" style={{ fontSize: '2rem' }}>video_library</i><br/>
				Сериалы
			</Link>
			<Link to="/">
				<i className="material-icons" style={{ fontSize: '2rem' }}>account_circle</i><br/>
				Ещё
			</Link>
			<Link to="/accessability">
				<i className="material-icons" style={{ fontSize: '2rem' }}>settings_accessibility</i><br/>
				Доступность
			</Link>

		</nav>
	)
}

export default NavMobile